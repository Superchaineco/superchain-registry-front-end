import { Stack } from '@mui/material'
import ChainsTable from './ChainsTable'
import { type ReactElement } from 'react'

const ChainsSearchTable = (): ReactElement => {
  return (
    <Stack spacing={1}>
      <div></div>
      <ChainsTable />
    </Stack>
  )
}

export default ChainsSearchTable
