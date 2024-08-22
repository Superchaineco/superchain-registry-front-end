import InformationLinkCard from '@/components/common/InformationLinkCard'
import { Box, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { type ReactElement } from 'react'

const SuperchainInformation = (): ReactElement => {
  return (
    <Stack gap={1}>
      <Typography variant="h4">The Superchain</Typography>
      <Grid container spacing={4}>
        <Grid md={4} xs={12}>
          <Typography variant="body2" marginBottom={2}>
            Superchain is a secure, equitable, and fair internet can only exist if it is built on decentralized
            infrastructure. Blockchains are the key, but they need a platform for global scale.
          </Typography>
          <Typography variant="body2">
            The foundation for a more equitable digital economy is an interconnected network of blockchains built on a
            modular, open-source codebase.
          </Typography>
        </Grid>
        <Grid md={8} xs={12}>
          <Box>
            <Grid container spacing={3}>
              <Grid sm={6} xs={12}>
                <InformationLinkCard
                  title="Contribute"
                  information="The Optimism Collective is powered by people just like you all around the globe. Discover how your contributions can have the most impact."
                  textLink="Get Started"
                  link="/"
                  backgroundColor="#FF99A1"
                />
              </Grid>
              <Grid sm={6} xs={12}>
                <InformationLinkCard
                  title="Deploy"
                  information="Launch your application or OP Chain on the Superchain. Experience innovative use cases and vibrant ecosystems."
                  textLink="Get Started"
                  link="/"
                  backgroundColor="#BAB1FB"
                />
              </Grid>
              <Grid sm={6} xs={12}>
                <InformationLinkCard
                  title="Build"
                  information="Create impactful projects with Superchain’s resources and inspiration. Join Base, Zora, OP Mainnet, Farcaster, and more."
                  textLink="Get Started"
                  link="/"
                  backgroundColor="#A3F5F1"
                />
              </Grid>
              <Grid sm={6} xs={12}>
                <InformationLinkCard
                  title="Explore Apps"
                  information="Discover and interact with various applications running on the Optimism network. Join a thriving ecosystem."
                  textLink="Explore"
                  link="/"
                  backgroundColor="#DEFDA1"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default SuperchainInformation
