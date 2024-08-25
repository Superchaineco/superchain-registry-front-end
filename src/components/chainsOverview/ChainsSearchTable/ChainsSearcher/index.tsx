import SearchInput from '@/components/common/SearchInput'
import { useQueryChains } from '@/features/chainsOverview/hooks/useQueryChains'
import { type ChangeEvent, type ReactElement } from 'react'

const ChainsSearcher = (): ReactElement => {
  const { changeSearcher, search } = useQueryChains()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeSearcher(event.currentTarget.value)
  }

  return <SearchInput value={search} onChange={handleChange} />
}

export default ChainsSearcher
