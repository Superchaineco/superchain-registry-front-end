import { BACKEND_BASE_URI } from '@/config/constants'
import { type ChainInfo } from '@/types/chainInfo'
import axios from 'axios'

class ChainsOverviewService {
  httpInstance = axios.create({
    baseURL: BACKEND_BASE_URI,
  })

  public async getChainsInfo(): Promise<ChainInfo[]> {
    const response = await this.httpInstance.get<ChainInfo[]>('/get-chain-info')

    return response.data
  }
}

const chainsOverviewService = new ChainsOverviewService()
export default chainsOverviewService
