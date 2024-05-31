import { PageParams, PageResponse } from "../api";
import { service } from "../request";

const SCAN_API = import.meta.env.VITE_API_HOST;
const SCAN_RESOURCE_PATH = import.meta.env.VITE_ASSETS_HOST;
// validator locations

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

// on address
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

//  total data
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

//  nft
export const get_epoch_current = () => {
  return service.get("/epoch/current");
};

//  block list
/**
 *
 * @param params
 * @returns
 */
export interface GetBlockPageParams extends PageParams {
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

export interface GetBlockResponse extends PageResponse {
  blocks: Array<BlockItem>;
}
export const get_block_page = (
  params: GetBlockPageParams
): Promise<GetBlockResponse> => {
  return service.get(`${SCAN_API}/block/page`, { params });
};

// block data

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
export interface GetValidatorParams extends PageParams {
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
export interface GetValidatorResponse extends PageResponse {
  data: Array<GetValidatorListItem>;
}
// validators list
export const get_validator_page = (
  params: GetValidatorParams
): Promise<GetValidatorResponse> => {
  return service.get(`${SCAN_API}/validator/page`, { params });
};

export type GetStakerOrder = "amount asc" | "amount desc" | "";
export interface GetStakerParams extends PageParams {
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
export interface GetStakerResponse extends PageResponse {
  data: Array<GetStakerListItem>;
}
// stakers list
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
export interface GetSnftMetaResponse extends PageResponse {
  nfts: Array<GetSnftMetaItem>;
}
export interface GetSnftMetaParams extends PageParams {
  collection_id?: undefined | string;
  owner?: undefined | string;
}
// csbt list
export const get_snft_meta_page = (
  params: GetSnftMetaParams
): Promise<GetSnftMetaResponse> => {
  return service.get(`${SCAN_API}/snft_meta/page`, { params });
};

export interface GetAccountPageListItem {
  address: string;
  balance: string;
  code: null | string;
  nftCount: number;
  nonce: number;
  number: number;
  snftCount: number;
  snftValue: string;
  stakerAmount?: string;
  validatorAmount?: string;
}
export interface GetAccountPageResponse extends PageResponse {
  balance: string;
  accounts: Array<GetAccountPageListItem>;
}
export type GetAccountPageOrder =
  | "balance DESC"
  | "balance ASC"
  | "staker_amount DESC"
  | "staker_amount ASC"
  | "validator_amount DESC"
  | "validator_amount ASC"
  | "snft_count ASC"
  | "snft_count DESC"
  | "";
export interface GetAccountPageParams extends PageParams {
  order: GetAccountPageOrder;
}
// accounts list
export const get_account_page = (
  params: GetAccountPageParams
): Promise<GetAccountPageResponse> => {
  return service.get(`${SCAN_API}/account/page`, { params });
};

export interface GetTransitionPageListItem {
  blockHash: string;
  blockNumber: number;
  contractAddress: null | string;
  cumulativeGasUsed: number;
  from: string;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  hash: string;
  input: string;
  nonce: number;
  status: number;
  timestamp: number;
  to: string;
  transactionIndex: number;
  value: string;
}

export interface GetTransactionPageParams extends PageParams {
  addr?: string;
  types?: null | string;
}

export interface GetTransactionPageResponse extends PageResponse {
  transactions: Array<GetTransitionPageListItem>;
}
// tx list
export const get_transaction_page = (
  params: GetTransactionPageParams
): Promise<GetTransactionPageResponse> => {
  return service.get(`${SCAN_API}/transaction/page`, { params });
};

export interface Get24hTxsItem {
  hour: number;
  num: number;
}
export type Get24hTxsResponse = Array<Get24hTxsItem>;
// 24h txs
export const get_24h_txs = (): Promise<Get24hTxsResponse> => {
  return service.get(`${SCAN_API}/chart/tx`);
};

// 24h accounts
export const get_24h_accounts = (): Promise<Get24hTxsResponse> => {
  return service.get(`${SCAN_API}/chart/account`);
};

// pledge list
export interface GetPledgePageParams extends PageParams {
  staker?: string;
  validator?: string
}
export interface GetPledgePageItem {
  amount: string;
  block_number: number;
  staker: string;
  timestamp: number;
  tx_hash: string;
  validator: string;
}
export interface GetPledgePageResponse extends PageResponse {
  data: Array<GetPledgePageItem>;
}
export const get_pledge_page = (params: GetPledgePageParams): Promise<GetPledgePageResponse> => {
  return service.get(`${SCAN_API}/pledge/page`, { params });
};

// account detail
export interface GetAccountDetailResponse {
  address: string
  balance:string
  nonce: number
  code: null | number
  number: number
  snftCount: number
  snftValue: string
  timestamp: number
  weight:number
  nftCount: number
  validatorAmount: string
  stakerAmount: string
  rewardCoinCount: number
  rewardSNFTCount: number
  validatorReward: string
  lastNumber: number
  reward: string
  profit: string
}
export const get_account_detail = (address: string): Promise<GetAccountDetailResponse> => {
  return service.get(`${SCAN_API}/account/${address}`)
}