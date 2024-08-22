import ChainsSearchTable from '@/components/chainsOverview/ChainsSearchTable'
import SuperchainInformation from '@/components/chainsOverview/SuperchainInformation'
import { Stack, Container } from '@mui/material'

export default function ChainsOverview() {
  return (
    <Container>
      <Stack marginTop={6} gap={6}>
        <ChainsSearchTable />
        <SuperchainInformation />
      </Stack>
    </Container>
  )
}
