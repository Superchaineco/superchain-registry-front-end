import { Container, Paper, Stack } from '@mui/material'
import { type ReactElement } from 'react'
import Image from 'next/image'
import css from './styles.module.css'
import Link from 'next/link'

const Header = (): ReactElement => {
  return (
    <Paper className={css.container} elevation={1} sx={{ borderRadius: 0 }}>
      <Container>
        <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
          <Link href="/" style={{ display: 'contents' }}>
            <Image src="/images/superchain.svg" alt="Superchain" width={190} height={30} />
          </Link>
        </Stack>
      </Container>
    </Paper>
  )
}

export default Header
