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
export interface GetOnlineAddrResponse {
  addrs: Array<string>;
  count: number;
  h1: OnlineHItem;
  h8: OnlineHItem;
  onlineIdleNode: Array<string>;
  onlineNode4h: number;
}
export const get_onlineAddr = (): Promise<GetOnlineAddrResponse> => {
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
  totalRewardAmount: number;
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
export type GetBlockRewardResponse = Array<BlockReward>;
export const get_block_reward = (
  block: string
): Promise<GetBlockRewardResponse> => {
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
  number?: number;
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
  validator?: string;
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
export const get_pledge_page = (
  params: GetPledgePageParams
): Promise<GetPledgePageResponse> => {
  return service.get(`${SCAN_API}/pledge/page`, { params });
};

// account detail
export interface GetAccountDetailResponse {
  address: string;
  balance: string;
  nonce: number;
  code: null | number;
  number: number;
  snftCount: number;
  snftValue: string;
  timestamp: number;
  weight: number;
  nftCount: number;
  validatorAmount: string;
  stakerAmount: string;
  rewardCoinCount: number;
  rewardSNFTCount: number;
  validatorReward: string;
  lastNumber: number;
  reward: string;
  profit: string;
  stakerReward: string;
}
export const get_account_detail = (
  address: string
): Promise<GetAccountDetailResponse> => {
  return service.get(`${SCAN_API}/account/${address}`);
};

export interface GetBlockDetailResponse {
  difficulty: number;
  extraData: string;
  gasLimit: number;
  gasUsed: number;
  hash: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: number;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  size: number;
  stateRoot: string;
  timestamp: number;
  totalDifficulty: string;
  totalTransaction: number;
  transactionsRoot: string;
  uncles: Array<unknown>;
  proposers: Array<string>;
  proof: Array<string>;
}
// /block/203431
export const get_block_detail = (
  block: number
): Promise<GetBlockDetailResponse> => {
  return service.get(`${SCAN_API}/block/${block}`);
};

export interface GetSlashingParams {
  page: number;
  page_size: number;
  address?: string;
  number?: number;
  reason?: 1 | 2 | null;
  // 2 惩罚块  1 黑洞块 null
}

export interface GetSlashingsBlackHoleItem {
  address: string;
  block_number: number;
  reason: string;
  weight: number;
}
export interface GetSlashingsResponse {
  data: Array<GetSlashingsBlackHoleItem>;
  total: number;
}
export const get_slashings = (
  params: GetSlashingParams
): Promise<GetSlashingsResponse> => {
  return service.get(`${SCAN_API}/slashings`, { params });
};

export type GetTransactionLogsResponse = Array<unknown>;

export const get_transaction_logs = (
  hash: string
): Promise<GetTransactionLogsResponse> => {
  return service.get(`${SCAN_API}/transaction_logs/${hash}`);
};

export interface GetTransactionByHashResponse {
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
export const get_transaction_Hash = (
  hash: string
): Promise<GetTransactionByHashResponse> => {
  return service.get(`${SCAN_API}/transaction/${hash}`);
};
export interface GetTransactionErbieByHashResponse {
  tx_hash: string; //owned transaction hash
  type: number; //transaction type
  address: string; //the NFT or SNFT address of the transaction
  from: string; //seller or caller address
  to: string; //buyer or proxy address to set
  value: string; //price value, the unit is wei
  extra: string; //fee receive address or meta url
  timestamp: string; //transaction timestamp
  block_number: string; //block number
  royalty_rate: number; //for the creator royalty rate
  fee_rate: number; //fee rate, unit wei; or number of recycle snft pieces
  proxy: string;
}
//
//It's validator's proxy address to run a node
export const get_transaction_erbie_Hash = (
  hash: string
): Promise<GetTransactionErbieByHashResponse> => {
  return service.get(`${SCAN_API}/transaction/erbie/${hash}`);
};

export type GetContractType = "0" | "1";
export interface GetContractParams {
  page: number;
  page_size: number;
  // 0 token  , 1 nft
  ctype: GetContractType;
}
export interface GetContractItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null | string;
  tx_hash: string;
  block_number: number; //block number
  contract_creator: string;
  contract_address: string;
  implement_contract_addr: string;
  contract_name: string;
  contract_type: string;
  token_name: string;
  symbol: string;
  icon: string;
  total_supply: string;
  source_code: string;
  holders: number;
  call_times: number;
  verified: boolean;
  audited: boolean;
  contract_abi: string;
  create_code: string;
  deployed_code: string;
  constructor_arg: string;
  compiler_version: string;
  license: string;
}
export interface GetContractResponse extends PageResponse {
  contracts: GetContractItem[];
}
// token/nft list search
export const get_contract_page = (
  params: GetContractParams
): Promise<GetContractResponse> => {
  return service.get(`${SCAN_API}/contract/page`, { params });
};

export interface GetContractDetail {}
// search token detail
export const get_contract_detail = (
  address: string
): Promise<GetContractItem> => {
  return service.get(`${SCAN_API}/contract/${address}`);
};

export interface GetContractListByAddrParams extends PageParams {
  addr: string;
}
export interface GetContractHoldersByAddrItem {
  address: string;
  quantity: number;
}
export interface GetContractHoldersByAddrResponse extends PageResponse {
  holders: [];
  total_amount: string;
  total: number;
}
// search contract holders page
export const get_contract_holders_page = (
  params: GetContractListByAddrParams
): Promise<GetContractHoldersByAddrResponse> => {
  return service.get(`${SCAN_API}/contract/holders/page`, { params });
};

export interface GetContractTxItem {
  blockHash: string;
  block_number: number;
  contractAddress: null | string;
  cumulativeGasUsed: number;
  from: string;
  function_name: string;
  gas: number;
  gasPrice: number;
  gasUsed: number;
  hash: string;
  input: string;
  nonce: number;
  status: number;
  timestamp: number;
  to: string;
  transactionIndex: 0;
  value: string;
}
export interface GetContractTxsByAddrResponse extends PageResponse {
  contract_txs: GetContractTxItem[];
  total: number;
}
// /contract_tx/page
export const get_contract_tx_page = (
  params: GetContractListByAddrParams
): Promise<GetContractTxsByAddrResponse> => {
  return service.get(`${SCAN_API}/contract_tx/page`, { params });
};

// 查24小时账户增长率
export const get_account_growth_rate = (
): Promise<number> => {
  return service.get(`${SCAN_API}/account/growth_rate`);
};

// 查24小时交易增长率 
export const get_txs_growth_rate = (): Promise<number> => {
  return service.get(`${SCAN_API}/transaction/growth_rate`);
};

// 查询全网总账户数 
export const get_total_accounts = (): Promise<number> => {
  return service.get(`${SCAN_API}/account/total_num`);
};

// 查询全网token总数 
export const get_account_total = (): Promise<number> => {
  return service.get(`${SCAN_API}/contract/token_total_num`);
};

// 查询nft全网总数 /contract/nft_total_num
export const get_nft_total_num = (): Promise<number> => {
  return service.get(`${SCAN_API}/contract/nft_total_num`);
};

// 查询全网合约总数 /contract/total_num
export const get_contract_total_num = (): Promise<number> => {
  return service.get(`${SCAN_API}/contract/total_num`);
};
// 查询全网合约调用次数  /contract_tx/total_num
export const get_contract_tx_total_num = (): Promise<number> => {
  return service.get(`${SCAN_API}/contract_tx/total_num`);
};

//  查询合约的 transfers  
export const get_contract_transfer_num = (addr: string): Promise<number> => {
  return service.get(`${SCAN_API}/contract/transfer_num/${addr}`);
};