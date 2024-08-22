import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { type ReactElement } from 'react'
import { type SxProps } from '@mui/material/styles'

const HelpIcon = ({ title, sx }: { title: string; sx: SxProps }): ReactElement => {
  return (
    <Tooltip title={title} arrow>
      <HelpOutlineIcon sx={sx} />
    </Tooltip>
  )
}

export default HelpIcon
