import { TableCell, Stack } from '@mui/material'
import HelpIcon from '@/components/common/HelpIcon'
import { type ReactElement } from 'react'

const TableCellWithHelp = ({ children, title }: { children: React.ReactNode; title: string }): ReactElement => {
  return (
    <TableCell>
      <Stack alignItems="center" justifyContent="end" direction="row" gap={1}>
        <span>{children}</span>
        <HelpIcon title={title} sx={{ width: 16, opacity: 0.5 }} />
      </Stack>
    </TableCell>
  )
}

export default TableCellWithHelp
