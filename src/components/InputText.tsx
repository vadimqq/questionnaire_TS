import React from 'react'
import TextField from '@material-ui/core/TextField'

interface InputProps {
  label: string
  name: string
  error: boolean
  helperText: string
}

const InputText = React.forwardRef<HTMLInputElement,InputProps>((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      type="text"
      inputRef={ ref }
      { ...props }
    />
  )
})

export default InputText