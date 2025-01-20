import { dumpInfoIntoGoogleSheet, getChainInfoListService } from '@/app/services/get-chain-info-service'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const authHeader = req.headers.get('Authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Authorization header is missing or invalid', { status: 401 });
    }
    let result = await getChainInfoListService()
    dumpInfoIntoGoogleSheet(result)
    return NextResponse.json(result)
}

