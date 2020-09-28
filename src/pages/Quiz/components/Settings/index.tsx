import React, { useState } from 'react';
import RadioButton from '../../../../components/RadioButton';

import {
  SettingsWrapper,
  MoreVertical,
  SubTitle,
  Legend,
  Option,
  Close,
} from './styled';

const Settings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [templateResponse, setTemplateResponse] = useState<string>('1');

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <MoreVertical onClick={handleIsOpen} />
      <SettingsWrapper isOpen={isOpen}>
        <SubTitle>
          Configurações do quiz <Close onClick={handleIsOpen} />
        </SubTitle>
        <Option>
          <Legend>Template de resposta</Legend>
          <RadioButton
            options={[
              {
                label: '1',
                value: '1',
              },
              {
                label: '2',
                value: '2',
              },
            ]}
            value={templateResponse}
            name="templateResponse"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTemplateResponse(e.target.value);
            }}
          />
        </Option>
      </SettingsWrapper>
    </>
  );
};

export default Settings;
