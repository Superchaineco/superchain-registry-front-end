type FilterColumnType = {
  column: string
  value: string
}

export interface QueryChainsState {
  search: string
  filters: { [column: string]: Array<string> }
}

export type QueryChainsAction =
  | { type: 'SEARCH'; payload: string }
  | { type: 'ADD_FILTER'; payload: FilterColumnType }
  | { type: 'REMOVE_FILTER'; payload: FilterColumnType }
  | { type: 'CLEAR_ALL' }

export const initialState: QueryChainsState = {
  search: '',
  filters: {},
}

export const queryChainsReducer = (state: QueryChainsState, action: QueryChainsAction): QueryChainsState => {
  const filtersColumnResolver = (column: string) => {
    let filtersColumn = state.filters[column]
    if (filtersColumn === undefined) {
      filtersColumn = []
    }
    return filtersColumn
  }

  switch (action.type) {
    case 'SEARCH':
      return { ...state, search: action.payload }
    case 'ADD_FILTER':
      let column = action.payload.column
      let newValue = action.payload.value
      return { ...state, filters: { ...state.filters, [column]: [...filtersColumnResolver(column), newValue] } }
    case 'REMOVE_FILTER':
      let columnRm = action.payload.column
      let removeValue = action.payload.value
      return {
        ...state,
        filters: { ...state.filters, [columnRm]: filtersColumnResolver(columnRm).filter((v) => v != removeValue) },
      }
    case 'CLEAR_ALL':
      return initialState
    default:
      throw new Error(`Unknown action type: ${action}`)
  }
}
