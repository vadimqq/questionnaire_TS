import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export const SubmitButton = ({ children }: any) => {
  const styles = useStyle()

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={ styles.root }
    >
      { children }
    </Button>
  )
}