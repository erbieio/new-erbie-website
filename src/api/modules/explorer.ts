import { service } from "../request";

const SCAN_API = "/scanApi";
const SCAN_RESOURCE_PATH = "/scanAssets";
// 查询矿工经纬度

export interface GetValidatorLocationsItem {
  address: string;
  proxy: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}
export const get_validator_locations = (): Promise<
  Array<GetValidatorLocationsItem>
> => {
  return service.get(`${SCAN_API}/validator/locations`);
};

// 查询在线地址
export interface OnlineHItem {
  addrs: Array<string>;
  count: number;
}
export interface GetOnlineAddrResopnse {
  addrs: Array<string>;
  count: number;
  h1: OnlineHItem;
  h8: OnlineHItem;
  onlineIdleNode: Array<string>;
  onlineNode4h: number;
}
export const get_onlineAddr = (): Promise<GetOnlineAddrResopnse> => {
  return service.get(`${SCAN_RESOURCE_PATH}/upload/onlineAddr.json`);
};

//  查询 总数
export interface GetStatsResponse {
  validatorTotalPledge: string;
  activeAccount: number;
  avgBlockTime: number;
  chainId: number;
  genesisBalance: string;
  ready: boolean;
  rewardCoinCount: number;
  rewardSNFTCount: number;
  total24HNFT: number;
  total24HStakerTx: number;
  total24HTx: number;
  totalAccount: number;
  totalAmount: string;
  totalBalance: string;
  totalBlackHole: number;
  totalBlock: number;
  totalCreator: number;
  totalEpoch: number;
  totalErbieTx: number;
  totalInternalTx: number;
  totalNFT: number;
  totalNFTAmount: string;
  totalNFTCreator: number;
  totalNFTTx: number;
  totalPledge: string;
  totalProfit: string;
  totalRecycle: number;
  totalSNFT: number;
  totalSNFTAmount: string;
  totalSNFTCreator: number;
  totalSNFTTx: number;
  totalStaker: number;
  totalStakerTx: number;
  totalTransaction: number;
  totalTransferTx: number;
  totalValidator: number;
  totalValidatorOnline: number;
}
export const get_stats = (): Promise<GetStatsResponse> => {
  return service.get(`${SCAN_API}/stats`);
};

//  系统NFT周期查询
export const get_epoch_current = () => {
  return service.get("/epoch/current");
};

//  查询区块分页数据
/**
 *
 * @param params
 * @returns
 */
export interface GetBlockPageParams {
  page: number;
  page_size: number;
  filter?: number;
}
export interface BlockItem {
  difficulty?: number;
  extraData?: string;
  gasLimit?: number;
  gasUsed?: number;
  hash?: string;
  mixHash?: string;
  nonce?: string;
  parentHash?: string;
  receiptsRoot?: string;
  sha3Uncles?: string;
  stateRoot?: string;
  totalDifficulty?: string;
  transactionsRoot?: string;
  uncles?: [];
  totalTransaction: number | string;
  timestamp: number | string;
  size: number | string;
  number: number | string;
  miner: string;
}

export interface GetBlockResponse {
  blocks: Array<BlockItem>;
  total: number;
}
export const get_block_page = (
  params: GetBlockPageParams
): Promise<GetBlockResponse> => {
  return service.get(`${SCAN_API}/block/page`, { params });
};

// 查询某个区块的数据

export interface AddressBlockReward {
  address: string;
  proxy: string;
  identity: number;
  block_number: number;
  amount: string;
}
export interface SnftBlockReward {
  address: string;
  identity: number;
  block_number: number;
  snft: string;
}

export type BlockReward = AddressBlockReward | SnftBlockReward;

export const get_block_reward = (
  block: string
): Promise<Array<BlockReward>> => {
  return service.get(`${SCAN_API}/reward/${block}`);
};

export type GetValidatorOrder =
  | "amount ASC"
  | "amount DESC"
  | "reward ASC"
  | "reward DESC"
  | "timestamp ASC"
  | "timestamp DESC"
  | "block_number ASC"
  | "block_number DESC"
  | "weight ASC"
  | "weight DESC"
  | "score ASC"
  | "score DESC"
  | "";
export interface GetValidatorParams {
  page: number;
  page_size: number;
  order: GetValidatorOrder;
}
export interface GetValidatorListItem {
  address: string;
  amount: string;
  block_number: number;
  proxy: string;
  reward: string;
  reward_count: number;
  reward_number: number;
  score: number;
  timestamp: number;
  tx_hash: string;
  weight: number;
}
export interface GetValidatorResponse {
  data: Array<GetValidatorListItem>;
  total: number;
}
// 查询矿工列表
export const get_validator_page = (
  params: GetValidatorParams
): Promise<GetValidatorResponse> => {
  return service.get(`${SCAN_API}/validator/page`, { params });
};

export type GetStakerOrder = "amount asc" | "amount desc" | "";
export interface GetStakerParams {
  page: number;
  page_size: number;
  order: GetStakerOrder;
  name: string;
}

export interface GetStakerListItem {
  address: string;
  amount: string;
  block_number: number;
  fee_rate: number;
  reward: string;
  reward_count: number;
  timestamp: number;
  tx_hash: string;
}
export interface GetStakerResponse {
  data: Array<GetStakerListItem>;
  total: number;
}
// 查询质押者列表
export const get_staker_page = (
  params: GetStakerParams
): Promise<GetStakerResponse> => {
  return service.get(`${SCAN_API}/staker/page`, { params });
};

export interface GetSnftMetaItem {
  address: string;
  createdAt: number;
  creator: string;
  last_price: null | string;
  meta_url: string;
  owner: string;
  pieces: number;
  remove: boolean;
  reward_at: number;
  reward_number: number;
  royaltyRatio: number;
  tx_amount: number;
}
export interface GetSnftMetaResponse {
  total: number;
  nfts: Array<GetSnftMetaItem>;
}
export interface GetSnftMetaParams {
  collection_id: undefined | string;
  owner: undefined | string;
  page: number;
  page_size: number;
}
// 查询CSBT 列表 ?collection_id=&owner=&page=1&page_size=16
export const get_snft_meta_page = (params: GetSnftMetaParams): Promise<GetSnftMetaResponse> => {
  return service.get(`${SCAN_API}/snft_meta/page`, { params });
};
