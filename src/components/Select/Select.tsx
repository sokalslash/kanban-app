import Select from 'react-select'

import { SelectLabel, SelectWrapper } from './Select.styles'

export interface SelectComponentProps<T> {
  title: string
  options: T[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  ref?: T
  value?: T
  defaultValue?: T
}

export const SelectComponent = ({ title, options, value, ref, onChange, defaultValue }: SelectComponentProps) => {
  return (
    <SelectWrapper>
      <SelectLabel>{title}</SelectLabel>
      <Select
        classNamePrefix='custom-select'
        //@ts-ignore
        inputRef={ref}
        defaultValue={defaultValue}
        options={options}
        getOptionLabel={option => option.title}
        getOptionValue={option => option.title}
        onChange={event => onChange(event.id)}
        value={value}
      />
    </SelectWrapper>
  )
}
