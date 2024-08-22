import { Stack, Typography, Container } from '@mui/material'

export default function Home() {
  return (
    <Container>
      <Stack marginTop={6} gap={6}>
        <Typography variant="h1" color="text.primary">
          Registry
        </Typography>
      </Stack>
    </Container>
  )
}
