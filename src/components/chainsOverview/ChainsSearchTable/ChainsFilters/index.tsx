'use client'
import FilterCheckboxList from '@/components/common/FilterCheckboxList'
import inputBoxStyle from '@/theme/inputBoxStyle'
import { Stack, Button } from '@mui/material'
import { useContext, type ReactElement } from 'react'
import { useToggleFilters } from './useToggleFilters'
import { QueryChainsContext } from '..'

const ChainsFilters = (): ReactElement => {
  const queryContext = useContext(QueryChainsContext)
  const { toggleFilter, hideFilters, idSelected, divRef } = useToggleFilters()

  const handleClickClearAll = () => {
    queryContext?.dispatch({ type: 'CLEAR_ALL' })
    hideFilters()
  }

  return (
    <Stack direction="row">
      <Stack ref={divRef} direction="row" spacing="12px" useFlexGap flexWrap="wrap">
        <FilterCheckboxList
          label="Layer"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Layer 2', value: 'L2' },
            { text: 'Layer 3', value: 'L3' },
          ]}
        />
        <FilterCheckboxList
          label="Status"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Mainnet', value: 'Mainnet' },
            { text: 'Testnet', value: 'Testnet' },
          ]}
        />
        <FilterCheckboxList
          label="Decent. Stage"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Stage 0', value: 'Stage 0' },
            { text: 'Stage 1', value: 'Stage 1' },
          ]}
        />
        <FilterCheckboxList
          label="Data Avail."
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Etherium', value: '1' },
            { text: 'Celestia', value: '2' },
            { text: 'Eigen', value: '3' },
            { text: 'Avail', value: '4' },
          ]}
        />
        <Button
          onClick={handleClickClearAll}
          disableRipple
          sx={{ ...inputBoxStyle, backgroundColor: null, paddingLeft: 0, paddingRight: 0 }}
        >
          Clear All
        </Button>
      </Stack>
    </Stack>
  )
}

export default ChainsFilters
