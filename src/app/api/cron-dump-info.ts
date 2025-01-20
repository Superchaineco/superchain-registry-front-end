import { NextResponse } from 'next/server'
import { dumpInfo, getChainInfoListService } from '../services/get-chain-info-service'



export default async function handler() {

    let result = await getChainInfoListService()
    dumpInfo(result)
    return NextResponse.json(result)
}
