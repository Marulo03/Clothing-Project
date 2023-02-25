import {
  FormInputLabel,
  Input,
  Group
} 
from './formInputStyle.jsx'

const FormInput = ({ label, ...otherprops}) => {
  return (
        <Group>
            <Input {...otherprops} />
            {label && (
                <FormInputLabel
                  shrink={otherprops.value.length}>
                {label}
                </FormInputLabel>
            )}
            
        </Group>
  )
}

export default FormInput;
