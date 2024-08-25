import { useContext } from 'react'
import { QueryChainsContext } from '../context/queryChainsContext'
import { type FilterColumnType } from '../reducers/queryChainsReducer'

export const useQueryChains = () => {
  const context = useContext(QueryChainsContext)

  if (!context) {
    throw new Error('useQueryChains must be used within a QueryChainsProvider')
  }

  const addFilter = (filter: FilterColumnType) => {
    context.dispatch({
      type: 'ADD_FILTER',
      payload: filter,
    })
  }

  const removeFilter = (filter: FilterColumnType) => {
    context.dispatch({
      type: 'REMOVE_FILTER',
      payload: filter,
    })
  }

  const changeSearcher = (search: string) => {
    context.dispatch({
      type: 'SEARCH',
      payload: search,
    })
  }

  const clearAll = () => {
    context.dispatch({
      type: 'CLEAR_ALL',
    })
  }

  return {
    addFilter,
    removeFilter,
    changeSearcher,
    clearAll,
    filters: context.queryChainsState.filters,
    search: context.queryChainsState.search,
  }
}
