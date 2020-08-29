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
  type,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = Boolean(value.length);
  const typeInput = Boolean(value.length) ? type : 'text';

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
          type={typeInput}
        />
        <Span>{label}</Span>
        {children && <ButtonCircle>{children}</ButtonCircle>}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
