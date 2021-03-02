import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core'
import { SubmitButton } from '../components/Buttton'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'

import { setAge } from '../store/questionnaireReducer'

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  }
}))

export const Step2 = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const styles = useStyle()
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(setAge(value))
    history.push('/step3')
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={ styles.root }
    >
      <Typography component="h2" variant="h5">Ваш возраст</Typography>
      <form
        onSubmit={ submitHandler }
        noValidate
        className={ styles.form }
      >
        <FormLabel component="legend">Не обязательное поле</FormLabel>
        <RadioGroup
          aria-label="age"
          name="age"
          id="age"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value=">20" control={<Radio />} label=">20" />
          <FormControlLabel value="20-25" control={<Radio />} label="20-25" />
          <FormControlLabel value="25-30" control={<Radio />} label="25-30" />
          <FormControlLabel value="30-35" control={<Radio />} label="30-35" />
          <FormControlLabel value="<35" control={<Radio />} label="<35" />
        </RadioGroup>
        <SubmitButton>{ value === '' ? 'пропустить': 'Следующий шаг' }</SubmitButton>
      </form>
    </Container>
  )
}