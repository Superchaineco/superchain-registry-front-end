'use client'
import { Button, Card, CardActions, CardContent, Typography, styled } from '@mui/material'
import { type ReactElement } from 'react'
import css from './styles.module.css'
import NorthEastIcon from '@mui/icons-material/NorthEast'

const LinkButton = styled(Button)({
  borderRadius: '100px',
  letterSpacing: '1px',
  fontSize: '14px',
  padding: '15px 30px',
})

type InformationLinkCardProps = {
  title: string
  information: string
  textLink: string
  link: string
  backgroundColor?: string
}

const InformationLinkCard = ({
  title,
  information,
  textLink,
  link,
  backgroundColor = '#FFFFFF',
}: InformationLinkCardProps): ReactElement => {
  return (
    <Card elevation={2} className={css.card} style={{ backgroundColor }}>
      <CardContent>
        <Typography variant="h4" mb={2} color="#202327">
          {title}
        </Typography>
        <Typography variant="body2" color="#202327">
          {information}
        </Typography>
      </CardContent>
      <CardActions>
        <LinkButton href={link} variant="contained" endIcon={<NorthEastIcon sx={{ height: 16, width: 16 }} />}>
          {textLink}
        </LinkButton>
      </CardActions>
    </Card>
  )
}

export default InformationLinkCard
