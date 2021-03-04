import React, { useState } from 'react'
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { makeStyles } from '@material-ui/core/styles'

import { Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { SubmitButton } from '../components/Buttton'
import InputText from '../components/InputText'
import SelectInput from '../components/SelectInput'

import { setInfo } from '../store/infoReducer'

interface InfoData {
  firstName: string
  lastName: string
  city: string
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Имя должно содержать только буквы')
    .required('Это поле необходимо заполнить'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Фамилия должна содержать только буквы')
    .required('Это поле необходимо заполнить')
})
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

export const Step1 = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const styles = useStyle()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: InfoData) => {
    dispatch(setInfo(data))
    history.push('/step2')
  }
  

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={ styles.root }
    >
      <Typography component="h2" variant="h5">Общая информация</Typography>
      <form
        onSubmit={ handleSubmit(onSubmit) }
        noValidate
        className={ styles.form }
      >
        <InputText
          ref={ register }
          label="Имя"
          name="firstName"
          error={ !!errors.firstName }
          helperText={ errors?.firstName?.message }
        />
        <InputText
          ref={ register }
          label="Фамилия"
          name="lastName"
          error={ !!errors.lastName }
          helperText={ errors?.lastName?.message }
        />
        <FormControl margin="normal">
          <InputLabel htmlFor="age-native-simple">Город</InputLabel>
          <SelectInput
              ref={ register }
              name="city"
          />
        </FormControl>
        <SubmitButton>Следующий шаг</SubmitButton>
      </form>
    </Container>
  )
}