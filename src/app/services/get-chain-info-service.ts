import axios from 'axios'
import * as toml from 'toml'
import { ChainInfo } from '../types/chain-info'
import NodeCache from 'node-cache'

const cache = new NodeCache({ stdTTL: 86400 }) // 86400 segundos = 24 horas

const BASE_URL = 'https://raw.githubusercontent.com/ethereum-optimism/superchain-registry/main'
const CHAIN_LIST_URL = `${BASE_URL}/chainList.toml`
const CONFIGS_URL = `${BASE_URL}/superchain/configs`
const TOML_EXTENSION = '.toml'
const SECURITY_COUNCIL_WALLET = '0x5a0Aae59D09fccBdDb6C6CcEB07B7279367C3d2A'



const STANDARD_VALUE = 'Standard'
const IMPLEMENTED_VALUE = 'Implemented'
const NOT_IMPLEMENTED_VALUE = 'Not implemented'
const NONE_VALUE = 'None'
const UNKNOWN_VALUE = 'Unknown'
const SECURITY_COUNCIL = 'Security Council'

async function getTomlDataCached(url: string): Promise<string> {
  if (cache.has(url)) {
    return cache.get(url) ?? ''
  }
  const response = await axios.get(url)
  cache.set(url, response.data)
  return response.data
}

export async function getChainInfoListService(): Promise<ChainInfo[]> {
  try {
    const response = await getTomlDataCached(CHAIN_LIST_URL)
    const parsedData = toml.parse(response)

    const chainInfoPromises = Object.values(parsedData).flatMap((chains: any) =>
      chains.map((chain: any) => processChain(chain)),
    )

    return await Promise.all(chainInfoPromises)
  } catch (error) {
    console.error('Error fetching or parsing TOML:', error)
    throw new Error('Failed to fetch or parse chain list.')
  }
}

async function processChain(chain: any): Promise<ChainInfo> {
  const chainInfo = new ChainInfo()
  chainInfo.name = chain.name
  chainInfo.layer = chain.parent?.type || UNKNOWN_VALUE
  chainInfo.status = chainInfo.type = getStatus(chain.identifier)
  chainInfo.configuration = getConfiguration(chain.superchain_level)
  chainInfo.scStatus = chain.superchain_level

  const detailUrl = `${CONFIGS_URL}/${chain.identifier}${TOML_EXTENSION}`
  return await setChainInfoDetail(detailUrl, chainInfo)
}

async function setChainInfoDetail(url: string, chainInfo: ChainInfo): Promise<ChainInfo> {
  try {
    const response = await getTomlDataCached(url)
    const detailData = toml.parse(response)

    chainInfo.charter = detailData.standard_chain_candidate ? STANDARD_VALUE : NONE_VALUE
    chainInfo.upgradeKeys = getUpgradeKeys(detailData.addresses)
    chainInfo.faultProofs = getFaultProofs(detailData.addresses)
    chainInfo.stage = chainInfo.decentStage = getDecentStage(chainInfo)
    chainInfo.charterLink = ''
    chainInfo.dataAvail = detailData.data_availability_type?.toUpperCase() || UNKNOWN_VALUE
    chainInfo.dataAvailLink = ''
    chainInfo.blockTime = `~${detailData.block_time}`

    return chainInfo
  } catch (error) {
    console.error('Error fetching chain detail:', error)
    throw new Error('Failed to fetch chain detail.')
  }
}

function getDecentStage(chainInfo: ChainInfo): string {
  if (chainInfo.upgradeKeys === SECURITY_COUNCIL && chainInfo.faultProofs === IMPLEMENTED_VALUE) return 'Stage 1'
  else return 'Stage 0'
}

function getFaultProofs(addresses: Record<string, any>): string {
  if (addresses.FaultDisputeGame) return IMPLEMENTED_VALUE
  else return NOT_IMPLEMENTED_VALUE
}

function getUpgradeKeys(addresses: Record<string, any>): string {
  if (addresses.ProxyAdminOwner?.toUpperCase() === SECURITY_COUNCIL_WALLET.toUpperCase()) return SECURITY_COUNCIL
  else return 'Unspecified'
}

function getStatus(identifier: string): string {
  if (identifier.startsWith('mainnet')) return 'Mainnet'
  else return 'Testnet'
}

function getConfiguration(superchainLevel: number): string {
  if (superchainLevel === 1) return STANDARD_VALUE
  else return 'Frontier'
}
