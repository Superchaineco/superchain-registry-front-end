'use client'
import FilterCheckboxList from '@/components/chainsOverview/ChainsSearchTable/ChainsFilters/FilterCheckboxList'
import inputBoxStyle from '@/theme/inputBoxStyle'
import { Stack, Button } from '@mui/material'
import { type ReactElement } from 'react'
import { useToggleFilters } from '../../../../features/chainsOverview/hooks/useToggleFilters'
import { useQueryChains } from '@/features/chainsOverview/hooks/useQueryChains'

const ChainsFilters = (): ReactElement => {
  const { clearAll } = useQueryChains()
  const { toggleFilter, hideFilters, idSelected, divRef } = useToggleFilters()

  const handleClickClearAll = () => {
    clearAll()
    hideFilters()
  }

  return (
    <Stack direction="row">
      <Stack ref={divRef} direction="row" spacing="12px" useFlexGap flexWrap="wrap">
        <FilterCheckboxList
          label="Layer"
          column="layer"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Layer 2', value: 'L2' },
            { text: 'Layer 3', value: 'L3' },
          ]}
        />
        <FilterCheckboxList
          label="Status"
          column="status"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Mainnet', value: 'Mainnet' },
            { text: 'Testnet', value: 'Testnet' },
          ]}
        />
        <FilterCheckboxList
          label="Decent. Stage"
          column="decentStage"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Stage 0', value: 'Stage 0' },
            { text: 'Stage 1', value: 'Stage 1' },
          ]}
        />
        <FilterCheckboxList
          label="Data Avail."
          column="dataAvail"
          idSelected={idSelected}
          onClick={toggleFilter}
          filters={[
            { text: 'Etherium', value: 'ETH-DA', srcImage: '/images/ethereum.png' },
            { text: 'Celestia', value: '2', srcImage: '/images/celestia.png' },
            { text: 'Eigen', value: '3', srcImage: '/images/eigen.png' },
            { text: 'Avail', value: '4', srcImage: '/images/avail.png' },
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
