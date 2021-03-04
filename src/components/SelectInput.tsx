import React from 'react'
import Select from '@material-ui/core/Select'

interface SelectProps {
  name : string
  cities: string[]
}

const SelectInput = React.forwardRef<HTMLInputElement,SelectProps>((props, ref) => {
	return (
		<Select
      native
      inputRef= { ref }
      name={ props.name }
    >
      <option aria-label="None" value="" />
      { props.cities.map((name, index) => {
        return (
          <option value={ name } key={ index }>{ name }</option>
        )
      }) }
    </Select>
	)
})

export default SelectInput