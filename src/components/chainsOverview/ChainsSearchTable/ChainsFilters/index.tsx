'use client'
import FilterCheckboxList from '@/components/common/FilterCheckboxList'
import inputBoxStyle from '@/theme/inputBoxStyle'
import { Stack, Button } from '@mui/material'
import { useEffect, useRef, useState, type ReactElement } from 'react'

const ChainsFilters = (): ReactElement => {
  const menuRef = useRef<HTMLDivElement | null>(null)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (anchorEl && menuRef.current) {
      const buttonRect = anchorEl.getBoundingClientRect()

      const menuElement = menuRef.current
      menuElement.style.position = 'absolute'
      menuElement.style.top = `${buttonRect.bottom + window.scrollY}px`
      menuElement.style.left = `${buttonRect.left + window.scrollX}px`
    }
  }, [anchorEl])

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <Stack direction="row" spacing="12px" useFlexGap flexWrap="wrap">
        <FilterCheckboxList label="Layer" onClick={handleClick} />
        <FilterCheckboxList label="Status" onClick={handleClick} />
        <FilterCheckboxList label="Decent. Stage" onClick={handleClick} />
        <FilterCheckboxList label="Data Avail." onClick={handleClick} />
        <Button
          disableRipple
          sx={{ ...inputBoxStyle, backgroundColor: null, paddingLeft: 0, paddingRight: 0 }}
          onClick={handleClick}
        >
          Clear All
        </Button>
      </Stack>
    </>
  )
}

export default ChainsFilters
