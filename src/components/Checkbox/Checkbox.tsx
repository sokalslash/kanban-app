import { CheckboxInput, Label } from './Checkbox.styles'

export const Checkbox = ({
  isChecked,
  title,
  onChange,
}: {
  isChecked: boolean
  title: string
  onChange: () => void
}) => {
  return (
    <Label checked={isChecked}>
      <CheckboxInput
        checked={isChecked}
        onChange={onChange}
      />
      {title}
    </Label>
  )
}
