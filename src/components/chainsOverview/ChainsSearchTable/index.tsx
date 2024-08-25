'use client'
import { Stack } from '@mui/material'
import ChainsTable from './ChainsTable'
import { type ReactElement } from 'react'
import ChainsFilters from './ChainsFilters'
import Grid from '@mui/material/Unstable_Grid2'
import ChainsSearcher from './ChainsSearcher'
import { QueryChainsProvider } from '@/features/chainsOverview/context/queryChainsContext'

const ChainsSearchTable = (): ReactElement => {
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
        <ChainsTable />
      </Stack>
    </QueryChainsProvider>
  )
}

export default ChainsSearchTable
