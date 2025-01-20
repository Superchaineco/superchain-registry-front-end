import { NextResponse } from 'next/server'
import { getChainInfoListService } from '../services/get-chain-info-service'



export default function handler() {

    return NextResponse.json(await getChainInfoListService())k
}
