'use client'
import { Stack } from '@mui/material'
import ChainsTable from './ChainsTable'
import { type ChangeEvent, createContext, type Dispatch, useReducer, type ReactElement } from 'react'
import ChainsFilters from './ChainsFilters'
import Grid from '@mui/material/Unstable_Grid2'
import SearchInput from '@/components/common/SearchInput'
import { initialState, type QueryChainsAction, queryChainsReducer, type QueryChainsState } from './queryChainsReducer'

interface QueryChainsContextType {
  queryChainsState: QueryChainsState
  dispatch: Dispatch<QueryChainsAction>
}

export const QueryChainsContext = createContext<QueryChainsContextType | undefined>(undefined)

const ChainsSearchTable = (): ReactElement => {
  const [queryChainsState, dispatch] = useReducer(queryChainsReducer, initialState)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SEARCH', payload: event.currentTarget.value })
  }

  return (
    <QueryChainsContext.Provider value={{ queryChainsState, dispatch }}>
      <Stack spacing={2}>
        <Grid container columns={10} gap={{ xs: 2, md: 0 }}>
          <Grid xs={12} md={8}>
            <ChainsFilters />
          </Grid>
          <Grid xs={12} md={2}>
            <SearchInput value={queryChainsState.search} onChange={handleChange} />
          </Grid>
        </Grid>
        <ChainsTable />
      </Stack>
    </QueryChainsContext.Provider>
  )
}

export default ChainsSearchTable
