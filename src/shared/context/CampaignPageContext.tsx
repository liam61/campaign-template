import { ReactNode, createContext, useMemo } from 'react'

import { CampaignFunctionConfig } from '@apis'
import { useRequest } from 'ahooks'
import { Spin } from 'antd'

import { pageService } from '../services'

export interface CampaignPageContextValue {
  loading: boolean
  permissionConfig: Record<string, boolean>
  functionConfig: CampaignFunctionConfig
}

const CampaignPageInitialValues = {
  loading: false,
  permissionConfig: {},
  functionConfig: {},
} as CampaignPageContextValue

export const CampaignPageContext = createContext<CampaignPageContextValue>(CampaignPageInitialValues)

export interface CampaignPageProviderProps {
  children?: ReactNode
  /**
   * force render children even page apis not ready
   */
  forceRender?: boolean
  permission?: string
}

export function CampaignPageProvider(props: CampaignPageProviderProps): ReactNode {
  const { children, forceRender = false, permission } = props

  const { loading: permLoading, data: permissionConfig } = useRequest(pageService.getPermissionConfig)
  const { loading: configLoading, data: functionConfig } = useRequest(pageService.getFunctionConfig)

  // TODO: solve auth in auth provider
  const _hasPermission = useMemo(() => {
    return !permission || permissionConfig?.[permission]
  }, [permission, permissionConfig])

  const loading = permLoading || configLoading

  return (
    <CampaignPageContext.Provider
      value={
        {
          loading,
          permissionConfig: permissionConfig || {},
          functionConfig: functionConfig || {},
        } as CampaignPageContextValue
      }
    >
      {forceRender ? (
        <Spin spinning={loading}>{children}</Spin>
      ) : loading ? (
        <Spin spinning>
          <div style={{ height: '100vh' }} />
        </Spin>
      ) : (
        children
      )}
    </CampaignPageContext.Provider>
  )
}
