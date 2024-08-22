import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Link } from '@mui/material'
import { type ReactElement } from 'react'
import TableCellWithHelp from './TableCellWithHelp'
import Image from 'next/image'

const ChainsTable = (): ReactElement => {
  return (
    <TableContainer
      component={Paper}
      elevation={1}
      sx={{ border: 1, borderColor: 'border.light', borderRadius: '12px' }}
    >
      <Table
        sx={{
          minWidth: 650,
          '& th, td': {
            borderRight: 1,
            borderColor: 'border.light',
          },
        }}
        aria-label="chains table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Layer</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCellWithHelp title="Upgrade Keys">Upgrade Keys</TableCellWithHelp>
            <TableCellWithHelp title="Fault Proofs">Fault Proofs</TableCellWithHelp>
            <TableCellWithHelp title="Decent. Stage">Decent. Stage</TableCellWithHelp>
            <TableCellWithHelp title="Charter">Charter</TableCellWithHelp>
            <TableCell align="right">Data Avail.</TableCell>
            <TableCell align="right">Block Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell sx={{ padding: '24px' }}>
              <Stack direction="row" my="6px" spacing={3} alignItems="center">
                <span>1</span>
                <Stack direction="row" gap="6px" alignItems="center">
                  <Image src="/images/optimism.png" alt="Superchain" width={24} height={24} />
                  <span>Optimist</span>
                </Stack>
              </Stack>
            </TableCell>
            <TableCell align="right">L2</TableCell>
            <TableCell align="right">Mainnet</TableCell>
            <TableCell align="right">Standard</TableCell>
            <TableCell align="right">Security Council</TableCell>
            <TableCell align="right">Implemented</TableCell>
            <TableCell align="right">Stage 1</TableCell>
            <TableCell align="right">
              <Link href="/">None</Link>
            </TableCell>
            <TableCell align="right">
              <Link href="/">Etherium</Link>
            </TableCell>
            <TableCell align="right">~2s</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ChainsTable
