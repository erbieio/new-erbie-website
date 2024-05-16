import { service } from "../request";

const SCAN_API = "/scanApi";
const SCAN_RESOURCE_PATH = '/scanAssets'
// 查询矿工经纬度

export interface GetValidatorLocationsItem {
  address: string
  proxy: string
  latitude: number
  longitude: number

}
export const get_validator_locations = (): Promise<Array<GetValidatorLocationsItem>> => {
  return service.get(`${SCAN_API}/validator/locations`);
};

// 查询在线地址
interface OnlineHItem {
    addrs: Array<string>
    count: number
}
export interface GetOnlineAddrResopnse {
    addrs: Array<string>
    count: number
    h1:OnlineHItem
    h8: OnlineHItem
    onlineIdleNode: Array<string>
    onlineNode4h: number
}
export const get_onlineAddr = (): Promise<GetOnlineAddrResopnse> => {
  return service.get(`${SCAN_RESOURCE_PATH}/upload/onlineAddr.json`);
};

//  查询 总数
export interface GetStatsResponse {
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
  filter?: number
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
  address: string
  proxy: string
  identity: number
  block_number: number
  amount: string
} 
export interface SnftBlockReward {
  address: string
  identity: number
  block_number: number
  snft: string
}

export type BlockReward = AddressBlockReward | SnftBlockReward

export const get_block_reward = (block: string): Promise<Array<BlockReward>> => {
  return service.get(`${SCAN_API}/reward/${block}`);
};


