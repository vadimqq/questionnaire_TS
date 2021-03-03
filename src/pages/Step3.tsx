import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core'
import { SubmitButton } from '../components/Buttton'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'

import { setLenguages } from '../store/questionnaireReducer'

interface Language {
  name: string
  checked: boolean
}

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
  const [value, setValue] = useState([
    {
      name: 'Php',
      checked: false
    },
    {
      name: 'Java',
      checked: false
    },
    {
      name: 'Phyton',
      checked: false
    },
    {
      name: 'JavaScript',
      checked: false
    },
    {
      name: 'Ruby',
      checked: false
    },
    {
      name: 'C',
      checked: false
    },
    {
      name: 'Swift',
      checked: false
    }
  ])
  const [alert, setAlert] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlert(false)
    const newValue = value.map(item => {
      if (item.name === event.target.name) {
        item.checked = event.target.checked
        return item
      } else {
        return item
      }
    })
    setValue(newValue)
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (createResult(value).length > 0) {
      dispatch(setLenguages(createResult(value)))
      history.push('/result')
    } else {
      setAlert(true)
    }
  }

  const createResult = (value: any) => {
    const result = value.map((item: Language) => {
      if (item.checked === true) {
        return item.name
      } else {
        return null
      }
    }).filter((item: string) => { return item !== null })
    return result
  }

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
        {value.map((item, id) => {
          return (
            <FormControlLabel
              control={<Checkbox checked={ item.checked } onChange={handleChange} name={ item.name } />}
              label={ item.name }
              color="primary"
              key={ id }
            />
          )
        })}
        
        {alert === true && <Alert severity="error">Необходимо выбрать хотя бы один пункт!</Alert>}
        <SubmitButton>Следующий шаг</SubmitButton>
      </form>
    </Container>
  )
}