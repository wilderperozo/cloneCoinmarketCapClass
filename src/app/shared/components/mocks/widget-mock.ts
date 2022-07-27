export const trendingMock = {
  imageWidget: 'assets/img/TrendingIcon.png',
  nameWidget: 'Trending',
  urlMore:'https://coinmarketcap.com/trending-cryptocurrencies/',
  list: [
    {
      id: 1,
      image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png',
      name: 'PancakeSwap',
      subname: 'CAKE',
      type: 'down',
      value: '1.93%',
      redirectTo:'https://coinmarketcap.com/currencies/pancakeswap/'
    },
    {
        id: 2,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16815.png',
        name: 'Green Satoshi Token (SOL)',
        subname: 'GST',
        type: 'down',
        value: '19.95%',
        redirectTo:'https://coinmarketcap.com/currencies/green-satoshi-token/'
    },
    {
        id: 3,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20089.png',
        name: 'Grove',
        subname: 'GVR',
        type: 'up',
        value: '0.86%',
        redirectTo:'https://coinmarketcap.com/currencies/grove/'
    },
  ],
};

export const addedMock = {
    imageWidget: 'assets/img/AddIcon.png',
    nameWidget: 'Recently Added',
    urlMore:'https://coinmarketcap.com/new/',
    list: [
      {
        id: 1,
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21117.png',
        name: '四皇 - Four Emperors',
        subname: 'YONKŌ',
        type: 'price',
        value: '$2668.98',
        redirectTo:'https://coinmarketcap.com/currencies/four-emperors/'
      },
      {
          id: 2,
          image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21116.png',
          name: 'Lunatics',
          subname: 'LUNAT',
          type: 'price',
          value: '$0.04241',
          redirectTo:'https://coinmarketcap.com/currencies/lunatics/'
      },
      {
          id: 3,
          image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21115.png',
          name: 'Alora',
          subname: 'ALORA',
          type: 'price',
          value: '$2.29',
          redirectTo:'https://coinmarketcap.com/currencies/alora/'
      },
    ],
}
