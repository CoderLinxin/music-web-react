/* 保存一些简单的固定数据 */

export const headerLinks = [
  {
    title: '发现音乐',
    link: '/discover'
  },
  {
    title: '我的音乐',
    link: '/mine'
  },
  {
    title: '朋友',
    link: '/friend'
  },
  {
    title: '商城',
    link: 'https://music.163.com/store/product'
  },
  {
    title: '音乐人',
    link: 'https://music.163.com/nmusician/web/index#/'
  },
  {
    title: '下载客户端',
    link: 'https://music.163.com/#/download'
  }
]

export const footerLinks = [
  {
    title: '服务条款',
    link: 'https://st.music.163.com/official-terms/service'
  },
  {
    title: '隐私政策',
    link: 'https://st.music.163.com/official-terms/privacy'
  },
  {
    title: '儿童隐私政策',
    link: 'https://st.music.163.com/official-terms/children'
  },
  {
    title: '版权投诉指引',
    link: 'https://music.163.com/st/staticdeal/complaints.html'
  },
  {
    title: '意见反馈',
    link: '#'
  }
]

export const footerImages = [
  {
    link: 'https://music.163.com/st/userbasic#/auth'
  },
  {
    link: 'https://music.163.com/recruit'
  },
  {
    link: 'https://music.163.com/web/reward'
  },
  {
    link: 'https://music.163.com/uservideo#/plan'
  }
]

// discover中的数据
export const dicoverMenu = [
  {
    title: '推荐',
    link: '/discover/recommend'
  },
  {
    title: '排行榜',
    link: '/discover/ranking'
  },
  {
    title: '歌单',
    link: '/discover/songs'
  },
  {
    title: '主播电台',
    link: '/discover/djradio'
  },
  {
    title: '歌手',
    link: '/discover/artist'
  },
  {
    title: '新碟上架',
    link: '/discover/album'
  },
]

// recommend-header所需数据
const recommendHeaderBaseLink = 'https://music.163.com/#/discover/playlist/?cat='
export const recommendHeader = [
  {
    title: '热门推荐',
    keyWords: [
      { key: '华语', link: `${recommendHeaderBaseLink}华语` },
      { key: '摇滚', link: `${recommendHeaderBaseLink}摇滚` },
      { key: '民谣', link: `${recommendHeaderBaseLink}民谣` },
      { key: '电子', link: `${recommendHeaderBaseLink}电子` }
    ],
    moreLink: 'https://music.163.com/#/discover/playlist/'
  },
  {
    title: '新碟上架',
    keyWords: [],
    moreLink: 'https://music.163.com/#/discover/album/'
  },
  {
    title: '榜单',
    keyWords: [],
    moreLink: 'https://music.163.com/#/discover/toplist'
  },
]

// 热门主播
export const hotRadios = {
  linkBaseUrl: 'https://music.163.com/#/user/home?id=',
  anchors: [
    {
      id: 278438485,
      picUrl: 'http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg',
      name: '陈立',
      position: '心理学家、美食家陈立教授',
    },
    {
      id: 91239965,
      picUrl: 'http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg',
      name: 'DJ艳秋',
      position: '著名音乐节目主持人',
    },
    {
      id: 324314596,
      picUrl: 'http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg',
      name: '国家大剧院古典音乐频道',
      position: '国家大剧院古典音乐官方',
    },
    {
      id: 1611157,
      picUrl: 'http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg',
      name: '谢谢收听',
      position: '南京电台主持人王馨',
    },
    {
      id: 2313954,
      picUrl: 'http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg',
      name: 'DJ晓苏',
      position: '独立DJ，CRI环球旅游广播特邀DJ',
    }
  ]
}

// 入驻歌手
export const setInSinger = {
  linkBaseUrl: 'https://music.163.com/#/user/home?id=',
  artists: [
    {
      id: 29879272,
      name: '张惠妹aMEI',
      describe: '台湾歌手张惠妹',
      imgUrl: 'http://p1.music.126.net/rCsLFXha6SLis0tV7yZ5fA==/109951165588539704.jpg?param=62y62',
    },
    {
      id: 100167517,
      name: 'Fine乐团',
      describe: '独立音乐人',
      imgUrl: 'http://p2.music.126.net/wDxCsT3YEYdNg-UZU_ZKeg==/109951166047225823.jpg?param=62y62',
    },
    {
      id: 58426904,
      name: '万晓利',
      describe: '民谣歌手、中国现代民谣的代表人物之一',
      imgUrl: 'http://p2.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=62y62',
    },
    {
      id: 93504818,
      name: '音乐人赵雷',
      describe: '民谣歌手',
      imgUrl: 'http://p1.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=62y62',
    },
    {
      id: 46998208,
      name: '王三薄',
      describe: '音乐人',
      imgUrl: 'http://p1.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=62y62',
    },

  ],
}