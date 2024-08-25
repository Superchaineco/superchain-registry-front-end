import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Link } from '@mui/material'
import { useMemo, type ReactElement } from 'react'
import TableCellWithHelp from './TableCellWithHelp'
import Image from 'next/image'
import { type ChainInfo } from '@/types/chainInfo'
import { useQueryChains } from '@/features/chainsOverview/hooks/useQueryChains'

const ChainsTable = ({ data }: { data: ChainInfo[] }): ReactElement => {
  const { filters, search } = useQueryChains()

  const filteredChains = useMemo(() => {
    if (!data) return []

    let filtered = data

    if (filters.length) {
      const groupedFilters = filters.reduce<{ [key: string]: string[] }>((group, filter) => {
        const { column, value } = filter
        if (!group[column]) {
          group[column] = []
        }
        group[column].push(value)
        return group
      }, {})

      filtered = filtered.filter((chainInfo) => {
        return Object.keys(groupedFilters).every((column) => {
          return groupedFilters[column].some((valor) => chainInfo[column as keyof ChainInfo] === valor)
        })
      })
    }

    if (search) {
      filtered = filtered.filter((chainInfo) =>
        Object.values(chainInfo).some((value) => value.toString().toLowerCase().includes(search.toLowerCase())),
      )
    }

    return filtered
  }, [data, filters, search])

  return (
    <TableContainer
      component={Paper}
      elevation={1}
      sx={{ border: 1, borderColor: 'border.light', borderRadius: '12px' }}
    >
      <Table
        stickyHeader
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
          {filteredChains.map((info, index) => (
            <TableRow key={index}>
              <TableCell sx={{ padding: '24px' }}>
                <Stack direction="row" my="6px" spacing={1} alignItems="center">
                  <div style={{ width: '19px' }}>
                    <span>{index + 1}</span>
                  </div>
                  <Stack direction="row" gap="6px" alignItems="center">
                    <Image src="/images/optimism.png" alt="Superchain" width={24} height={24} />
                    <span>{info.name}</span>
                  </Stack>
                </Stack>
              </TableCell>
              <TableCell align="right">{info.layer}</TableCell>
              <TableCell align="right">{info.status}</TableCell>
              <TableCell align="right">{info.configuration}</TableCell>
              <TableCell align="right">{info.upgradeKeys}</TableCell>
              <TableCell align="right">{info.faultProofs}</TableCell>
              <TableCell align="right">{info.decentStage}</TableCell>
              <TableCell align="right">
                {info.charter !== 'N/A' ? <Link href={info.charterLink}>{info.charter}</Link> : 'None'}
              </TableCell>
              <TableCell align="right">
                {info.dataAvail ? <Link href={info.dataAvailLink}>{info.dataAvail}</Link> : 'None'}
              </TableCell>
              <TableCell align="right">{info.blockTime}s</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ChainsTable
