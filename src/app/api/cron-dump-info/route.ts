import { dumpInfoIntoGoogleSheet, getChainInfoListService } from '@/app/services/get-chain-info-service'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    let result = await getChainInfoListService()
    dumpInfoIntoGoogleSheet(result)
    return NextResponse.json(result)
}

