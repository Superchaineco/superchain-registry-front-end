import { Skeleton, Stack, TableBody, TableCell, TableRow } from '@mui/material'
import { type ReactElement } from 'react'

const ChainsTableSkeleton = (): ReactElement => {
  return (
    <TableBody>
      {[...Array(8)].map((_, index) => (
        <TableRow key={index}>
          <TableCell component="th" scope="row" sx={{ padding: '24px' }}>
            <Stack direction="row" spacing={1} sx={{ paddingY: '6px' }}>
              <Skeleton animation="wave" variant="text" width={18} />
              <Skeleton animation="wave" variant="circular" width={24} height={24} />
              <Skeleton animation="wave" variant="text" width={120} />
            </Stack>
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" variant="text" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default ChainsTableSkeleton
