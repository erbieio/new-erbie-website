export const PAGE_LIST: Array<PageItem> = [
  {
    path: "/",
    index: 0,
    name: "",
    next: "/infrastructure",
    prev: null,
  },
  {
    path: "/infrastructure",
    index: 0,
    name: "Infrastructure",
    next: "/docs",
    prev: "/",
  },
  {
    path: "/docs",
    index: 1,
    name: "Documents",
    next: "/partners",
    prev: "/infrastructure",
  },
  {
    path: "/partners",
    index: 2,
    name: "Partners",
    next: "/explorer",
    prev: "/docs",
  },
  {
    path: "/explorer",
    index: 3,
    name: "Explorer",
    next: "/wallet",
    prev: "/partners",
  },

  {
    path: "/wallet",
    index: 4,
    name: "Wallet",
    next: null,
    prev: "/explorer",
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
    path: "/explorer/builder",
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
    path: "/explorer/token",
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
// VITE_ERB_XL_CONTRACT

export const TOKEN_LIST = [
  {
    name: "XL",
    contract: import.meta.env.VITE_ERB_XL_CONTRACT,
  },
  {
    name: "L",
    contract: import.meta.env.VITE_ERB_L_CONTRACT,
  },
];