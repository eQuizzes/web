import React from 'react';

import { FormFieldProps } from './interface';
import { FormFieldWrapper, Label, Input, Span, ButtonCircle } from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  onClick,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          hasValue={hasValue}
          hasChildren={Boolean(children)}
          value={value}
          name={name}
          onChange={onChange}
          onClick={onClick}
        />
        <Span>{label}</Span>
        {children && <ButtonCircle>{children}</ButtonCircle>}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
