import { Input } from '@mui/material'
import { type ChangeEventHandler, type ReactElement } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import inputBoxStyle from '@/theme/inputBoxStyle'

const SearchInput = ({ value, onChange }: { value: string; onChange: ChangeEventHandler }): ReactElement => {
  return (
    <Input
      fullWidth
      placeholder="Search"
      disableUnderline
      value={value}
      onChange={onChange}
      startAdornment={<SearchIcon sx={{ width: 16, height: 16 }}></SearchIcon>}
      sx={inputBoxStyle}
    />
  )
}

export default SearchInput
