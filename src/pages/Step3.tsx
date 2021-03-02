import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core'
import { SubmitButton } from '../components/Buttton'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import { setLenguages } from '../store/questionnaireReducer'

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

export const Step3 = () => {
  const history = useHistory()
  const styles = useStyle()
  const dispatch = useDispatch()
  const [value, setValue] = useState({
    Php: false,
    Java: false,
    CSharp: false,
    JavaScript: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.checked });
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setLenguages(createResult(value)))
    history.push('/result')
  }

  const createResult = (value: any) => {
    const array = Object.keys(value)
    const result = array.map((item) => {
      if (value[item] === true) {
        return item
      } else {
        return false
      }
    }).filter(item => { return item !== false })
    return result
  }

  const { Php, Java, CSharp, JavaScript } = value

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={ styles.root }
    >
      <Typography component="h2" variant="h5">Какие языки програмирования вы знаете?</Typography>
      <form
        onSubmit={ submitHandler }
        noValidate
        className={ styles.form }
      >
        <FormLabel component="legend">кек</FormLabel>
          <FormControlLabel
            control={<Checkbox checked={Php} onChange={handleChange} name="Php" />}
            label="Php"
            color="primary"
          />
          <FormControlLabel
            control={<Checkbox checked={Java} onChange={handleChange} name="Java" />}
            label="Java"
          />
          <FormControlLabel
            control={<Checkbox checked={CSharp} onChange={handleChange} name="CSharp" />}
            label="C#"
          />
          <FormControlLabel
            control={<Checkbox checked={JavaScript} onChange={handleChange} name="JavaScript" />}
            label="JavaScript"
          />
        <SubmitButton>Следующий шаг</SubmitButton>
      </form>
    </Container>
  )
}