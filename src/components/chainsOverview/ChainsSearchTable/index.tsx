'use client'
import { Stack } from '@mui/material'
import ChainsTable from './ChainsTable'
import { type ReactElement } from 'react'
import ChainsFilters from './ChainsFilters'
import Grid from '@mui/material/Unstable_Grid2'
import { useQuery } from '@tanstack/react-query'
import chainsOverviewService from '@/features/chainsOverview/services/chainsOverview.service'
import { type ChainInfo } from '@/types/chainInfo'
import ChainsSearcher from './ChainsSearcher'
import { QueryChainsProvider } from '@/features/chainsOverview/context/queryChainsContext'

const ChainsSearchTable = (): ReactElement => {
  const { data, isLoading, error } = useQuery<ChainInfo[]>({
    queryKey: ['getChainInfo'],
    queryFn: async () => await chainsOverviewService.getChainsInfo(),
  })

  return (
    <QueryChainsProvider>
      <Stack spacing={2}>
        <Grid container columns={10} gap={{ xs: 2, md: 0 }}>
          <Grid xs={12} md={8}>
            <ChainsFilters />
          </Grid>
          <Grid xs={12} md={2}>
            <ChainsSearcher />
          </Grid>
        </Grid>
        {data && <ChainsTable data={data} />}
      </Stack>
    </QueryChainsProvider>
  )
}

export default ChainsSearchTable
