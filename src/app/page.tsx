import ChainsSearchTable from '@/components/chainsOverview/ChainsSearchTable'
import SuperchainInformation from '@/components/chainsOverview/SuperchainInformation'
import { QueryChainsProvider } from '@/features/chainsOverview/context/queryChainsContext'
import { Stack, Container } from '@mui/material'

export default function ChainsOverview() {
  return (
    <Container>
      <Stack marginY={6} gap={6}>
        <QueryChainsProvider>
          <ChainsSearchTable />
        </QueryChainsProvider>
        <SuperchainInformation />
      </Stack>
    </Container>
  )
}
