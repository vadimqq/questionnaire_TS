import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
    fontSize: '40px',
    color: '#3f1dcb'
  }
}))

export const Header = () => {
  const  styles = useStyle()

  return (
    <Typography
      className={ styles.root }
      component='h1'
      variant='h5'
    >
      Опросник по технологиям разработки
    </Typography>
  )
}