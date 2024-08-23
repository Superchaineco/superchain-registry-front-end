'use client'
import inputBoxStyle from '@/theme/inputBoxStyle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Badge, Box, Button } from '@mui/material'
import { type MouseEventHandler, useState, type ReactElement } from 'react'

const FilterCheckboxList = ({ label, onClick }: { label: string; onClick?: MouseEventHandler }): ReactElement => {
  const [countFilters, setCountFilters] = useState(0)

  return (
    <Box>
      <Badge
        color="primary"
        badgeContent={countFilters}
        sx={{ '& .MuiBadge-badge': { fontSize: 8, height: 15, minWidth: 15 } }}
      >
        <Button
          size="small"
          onClick={onClick}
          sx={inputBoxStyle}
          endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px' }} />}
        >
          {label}
        </Button>
      </Badge>
    </Box>
  )
}

export default FilterCheckboxList
