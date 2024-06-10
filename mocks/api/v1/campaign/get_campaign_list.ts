const campaignList = [
  {
    campaign_id: '2048010334',
    campaign_scene: 'PRODUCT',
    campaign_name: 'test-slot off',
    description: '111',
    start_time: 1738252800,
    end_time: 1738339199,
    status: 'UPCOMING',
    creator: 'bob.li@ct-test.com',
    create_time: 1715744016,
    updater: 'bob.li@ct-test.com',
    update_time: 1715757823,
    campaign_tier: 0,
    data_permission: [],
    mechanic_label_info: [],
    nomination_detail_info: {
      approved: 5,
      rejected: 3,
      under_review: 0,
      withdraw: 0,
    },
    num_session: 1,
  },
  {
    campaign_id: '2048010316',
    campaign_scene: 'PRODUCT',
    campaign_name: 'LLLLL new fs test',
    description: 'sdfasdfasdfbbb',
    start_time: 1870358400,
    end_time: 1870531199,
    status: 'DRAFT',
    creator: 'liam.liu@ct-test.com',
    create_time: 1715672148,
    updater: 'liam.liu@ct-test.com',
    update_time: 1715844754,
    campaign_tier: 0,
    data_permission: [],
    mechanic_label_info: [],
    nomination_detail_info: {
      approved: 0,
      rejected: 10,
      under_review: 0,
      withdraw: 4,
    },
    num_session: 5,
  },
  {
    campaign_id: '2048010312',
    campaign_scene: 'PRODUCT',
    campaign_name: 'test',
    description: '11',
    start_time: 1735574400,
    end_time: 1735660799,
    status: 'DRAFT',
    creator: 'bob.li@ct-test.com',
    create_time: 1715599564,
    updater: '',
    update_time: 0,
    campaign_tier: 0,
    data_permission: [],
    mechanic_label_info: [],
    nomination_detail_info: {
      approved: 0,
      rejected: 0,
      under_review: 0,
      withdraw: 0,
    },
    num_session: 1,
  },
]

module.exports = {
  campaign_list: campaignList,
  page_info: {
    offset: 0,
    limit: 20,
    total: 3,
    sort: { name: 'create_time', order: 'desc' },
  },
}
