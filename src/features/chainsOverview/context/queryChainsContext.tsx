'use client'
import { createContext, type Dispatch, type ReactNode, useReducer } from 'react'
import {
  initialState,
  type QueryChainsAction,
  queryChainsReducer,
  type QueryChainsState,
} from '../reducers/queryChainsReducer'

interface QueryChainsContextType {
  queryChainsState: QueryChainsState
  dispatch: Dispatch<QueryChainsAction>
}

export const QueryChainsContext = createContext<QueryChainsContextType | undefined>(undefined)

export const QueryChainsProvider = ({ children }: { children: ReactNode }) => {
  const [queryChainsState, dispatch] = useReducer(queryChainsReducer, initialState)

  return <QueryChainsContext.Provider value={{ queryChainsState, dispatch }}>{children}</QueryChainsContext.Provider>
}
