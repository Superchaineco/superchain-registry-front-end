import { Input } from '@mui/material'
import { type ReactElement } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import inputBoxStyle from '@/theme/inputBoxStyle'

const SearchInput = (): ReactElement => {
  return (
    <Input
      fullWidth
      placeholder="Search"
      disableUnderline
      startAdornment={<SearchIcon sx={{ width: 16, height: 16 }}></SearchIcon>}
      sx={inputBoxStyle}
    />
  )
}

export default SearchInput
