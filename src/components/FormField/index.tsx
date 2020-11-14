import React from 'react';

import { FormFieldProps } from './interface';
import {
  FormFieldWrapper,
  Label,
  Input,
  Text,
  Prefix,
  Textarea,
  ButtonCircle,
} from './styled';

const FormField: React.FC<FormFieldProps> = ({
  children,
  value,
  name,
  label,
  onChange,
  onClick,
  type = 'text',
  stroke = '2.4px',
  prefix,
  maxLength,
  handleListInPressKey,
}) => {
  const fieldId = `id_${name}`;
  const hasValue = !!value;
  const hasLabel = !!label.length;
  const isTextarea = type === 'textarea';
  const hasPrefix = prefix !== undefined;

  function handleKeyPress(
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    if (!handleListInPressKey) return;

    for (const { key, handleFunction } of handleListInPressKey) {
      if (event.key === key) {
        handleFunction();
      }
    }
  }

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} type={type}>
        {hasPrefix && <Prefix htmlFor={fieldId}>{prefix}</Prefix>}
        {isTextarea ? (
          <Textarea
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            autoComplete="off"
            maxLength={maxLength}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <Input
            id={fieldId}
            hasValue={hasValue}
            hasChildren={Boolean(children)}
            value={value}
            name={name}
            onChange={onChange}
            type={type}
            autoComplete="off"
            maxLength={maxLength}
            onKeyPress={handleKeyPress}
          />
        )}

        <Text hasLabel={hasLabel} type={type} htmlFor={fieldId}>
          {label}
        </Text>
        {children && (
          <ButtonCircle onClick={onClick} type="button" strokeWidth={stroke}>
            {children}
          </ButtonCircle>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
