import React from 'react';

import { FormFieldProps } from './interface';
import { FormFieldWrapper, Label, Input, Text, ButtonCircle } from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  onClick,
  type,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = value !== '';
  const typeInput = type !== undefined ? type : 'text';

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          hasValue={hasValue}
          hasChildren={Boolean(children)}
          value={value}
          name={name}
          onChange={onChange}
          onClick={onClick}
          type={typeInput}
          autoComplete="off"
        />
        <Text htmlFor={fieldId}>{label}</Text>
        {children && <ButtonCircle>{children}</ButtonCircle>}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
