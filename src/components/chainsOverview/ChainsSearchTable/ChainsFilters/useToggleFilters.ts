import { useEffect, useRef, useState } from 'react'

export const useToggleFilters = () => {
  const [idSelected, setIdSelected] = useState<string | null>(null)
  const divRef = useRef<HTMLDivElement>(null)

  const toggleFilter = (id: string) => {
    setIdSelected(id === idSelected ? null : id)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setIdSelected(null)
    }
  }

  const hideFilters = () => {
    setIdSelected(null)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return {
    toggleFilter,
    hideFilters,
    idSelected,
    divRef,
  }
}
