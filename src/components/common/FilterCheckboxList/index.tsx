'use client'
import inputBoxStyle from '@/theme/inputBoxStyle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Badge, Box, Button, Checkbox, Typography, List, ListItem } from '@mui/material'
import { useContext, useEffect, useId, useState, type ReactElement } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import css from './styles.module.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import { QueryChainsContext } from '@/components/chainsOverview/ChainsSearchTable'

type FilterValue = {
  text: string
  value: string
}

const FilterCheckboxList = ({
  label,
  idSelected,
  filters,
  onClick,
}: {
  label: string
  idSelected?: string | null
  filters: Array<FilterValue>
  onClick: (mensaje: string) => void
}): ReactElement => {
  const queryContext = useContext(QueryChainsContext)

  const id = useId()
  const [show, setShow] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    queryContext?.dispatch({
      type: event.target.checked ? 'ADD_FILTER' : 'REMOVE_FILTER',
      payload: { column: label, value: event.target.value },
    })
  }

  useEffect(() => {
    setShow(idSelected !== null)
  }, [idSelected])

  const countChecked = filters.filter(({ value }) =>
    queryContext?.queryChainsState.filters[label]?.includes(value),
  ).length

  return (
    <Box position="relative">
      <Badge
        color="primary"
        badgeContent={countChecked}
        sx={{ '& .MuiBadge-badge': { fontSize: 8, height: 15, minWidth: 15 } }}
      >
        <Button
          id={id}
          size="small"
          sx={inputBoxStyle}
          endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-10px' }} />}
          onClick={() => onClick(id)}
        >
          {label}
        </Button>
      </Badge>
      <AnimatePresence>
        {idSelected === id ? (
          <motion.div
            layoutId="menuFilter"
            initial={{ opacity: show ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: show ? 0 : 1 }}
            className={css.containerPopover}
          >
            <List
              className={css.containerListPopover}
              sx={{ ...inputBoxStyle, height: null, padding: 0, border: 1, borderColor: 'border.light' }}
            >
              {filters.map(({ value, text }) => (
                <ListItem
                  key={value}
                  divider
                  secondaryAction={
                    <Checkbox
                      value={value}
                      edge="end"
                      checked={queryContext?.queryChainsState.filters[label]?.includes(value)}
                      onChange={handleChange}
                      size="small"
                      checkedIcon={<CheckBoxOutlinedIcon />}
                      icon={<CheckBoxOutlineBlankOutlinedIcon />}
                    />
                  }
                >
                  <Typography variant="body2">{text}</Typography>
                </ListItem>
              ))}
            </List>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Box>
  )
}

export default FilterCheckboxList
