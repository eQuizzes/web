import React from 'react';

import { FormFieldProps } from './FormField';
import { FormFieldWrapper, Input, Span } from './styled';

const FormField: React.FC<FormFieldProps> = ({ value, name, label, onChange }) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);

  return (
    <FormFieldWrapper>
      <label htmlFor={fieldId}>
        <Input
          hasValue={hasValue}
          value={value}
          name={name}
          onChange={onChange}
        />
        <Span>
          {label}
        </Span>
      </label>

    </FormFieldWrapper>
  );
}

export default FormField;