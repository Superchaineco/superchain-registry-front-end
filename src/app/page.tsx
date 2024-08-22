import SuperchainInformation from '@/components/chainsOverview/SuperchainInformation'
import { Stack, Container } from '@mui/material'

export default function ChainsOverview() {
  return (
    <Container>
      <Stack marginTop={6} gap={6}>
        <SuperchainInformation />
      </Stack>
    </Container>
  )
}
