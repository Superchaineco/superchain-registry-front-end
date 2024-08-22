import { Box, Button, Typography } from '@mui/material'

export default function Home() {
  return (
    <Box
      width="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
      sx={{ bgcolor: 'background.default' }}
    >
      <Typography variant="h1" color="text.primary">
        Prueba
      </Typography>
      <Button variant="contained">Hola</Button>
      <Button variant="contained" color="secondary">
        Mundo
      </Button>
    </Box>
  )
}
