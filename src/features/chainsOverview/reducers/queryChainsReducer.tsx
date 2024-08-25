import { type ChainInfo } from '@/types/chainInfo'

export type FilterColumnType = {
  column: keyof ChainInfo
  value: string
}

export interface QueryChainsState {
  search: string
  filters: FilterColumnType[]
}

export type QueryChainsAction =
  | { type: 'SEARCH'; payload: string }
  | { type: 'ADD_FILTER'; payload: FilterColumnType }
  | { type: 'REMOVE_FILTER'; payload: FilterColumnType }
  | { type: 'CLEAR_ALL' }

export const initialState: QueryChainsState = {
  search: '',
  filters: [],
}

export const queryChainsReducer = (state: QueryChainsState, action: QueryChainsAction): QueryChainsState => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, search: action.payload }
    case 'ADD_FILTER':
      return { ...state, filters: [...state.filters, action.payload] }
    case 'REMOVE_FILTER':
      let removeFilter = action.payload
      return {
        ...state,
        filters: state.filters.filter(
          (filter) => !(filter.column === removeFilter.column && filter.value === removeFilter.value),
        ),
      }
    case 'CLEAR_ALL':
      return initialState
    default:
      throw new Error(`Unknown action type: ${action}`)
  }
}
