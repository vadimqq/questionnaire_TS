import React from 'react'
import Select from '@material-ui/core/Select'

interface SelectProps {
  name : string
}

const SelectInput = React.forwardRef<HTMLInputElement,SelectProps>((props, ref) => {
	return (
		<Select
      native
      inputRef= { ref }
      { ...props }
    >
      <option aria-label="None" value="" />
      <option value="Ульяновск">Ульяновск</option>
      <option value="Москва">Москва</option>
      <option value="Самра">Самара</option>
      <option value="Пермь">Пермь</option>
      <option value="Казань">Казань</option>
      <option value="Владивосток">Владивосток</option>
      <option value="Санкт-Петербург">Санкт-Петербург</option>
    </Select>
	)
})

export default SelectInput