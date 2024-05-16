export const PAGE_LIST:Array<PageItem> = [
  {
    path: "/",
    index: 0,
    name: "",
    next:'/infrastructure',
    prev: null
  },
  {
    path: "/infrastructure",
    index: 0,
    name: "Infrastructure",
    next:'/docs',
    prev: '/'
  },
  {
    path: "/docs",
    index: 1,
    name: "Documents",
    next:'/wallet',
    prev: '/infrastructure'
  },
  {
    path: "/wallet",
    index: 2,
    name: "Wallet",
    next: '/explorer/home',
    prev: '/docs'
  },
  {
    path: "/explorer/home",
    index: 3,
    name: "Explorer",
    next: null,
    prev: '/wallet'
  },

];

export interface PageItem{
  next: string | null
  prev: string | null
  path: string
  index: number
  name: string
}

export interface ExplorerPageItem {
  path: string
  index: number
  name: string
}

export const EXPLORER_PAGE_LIST:Array<ExplorerPageItem> = [
  {
    path: "/explorer/chain",
    index: 0,
    name: "CHAIN",
  },
  {
    path: "/explorer/validator",
    index: 1,
    name: "BUILDER",
  },
  // {
  //   path: "/explorer/staker",
  //   index: 2,
  //   name: "STAKER",
  // },
  {
    path: "/explorer/csbt",
    index: 3,
    name: "CSBT",
  },
  {
    path: "/explorer/asset",
    index: 4,
    name: "ASSET",
  },
  {
    path: "/explorer/account",
    index: 5,
    name: "ACCOUNT",
  },
  {
    path: "/explorer/transct",
    index: 6,
    name: "TRANSCT",
  },
]