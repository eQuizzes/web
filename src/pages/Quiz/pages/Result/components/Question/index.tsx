import React from 'react';

import {
  IconRightResponse,
  IconErrorResponse,
  QuestionWrapper,
  ResponseWrapper,
  QuestionText,
  ResponseText,
  IconUpScore,
  InfoWrapper,
  Header,
  Number,
} from './styled';

import { QuestionProps } from './interface';

const Question: React.FC<QuestionProps> = ({ questionRight }) => {
  return questionRight ? (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>1</sup>/<sub>9</sub>
        </Number>
        <InfoWrapper>
          578 <IconUpScore />
        </InfoWrapper>
      </Header>
      <QuestionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus
        eget ut elementum elit massa dictum iaculis molestie. Consequat sed
        consectetur rhoncus iaculis. Integer orci id egestas vestibulum dui.
        Nulla faucibus sapien, nulla nec, in metus, tempor.
      </QuestionText>
      <ResponseWrapper>
        <ResponseText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          faucibus eget ut elementum elit massa dictum iaculis molestie.
          Consequat sed consectetur rhoncus iaculis. Integer orci id egestas
          vestibulum dui. Nulla faucibus sapien, nulla nec, in metus, tempor.
        </ResponseText>
        <IconRightResponse />
      </ResponseWrapper>
    </QuestionWrapper>
  ) : (
    <QuestionWrapper>
      <Header>
        <Number>
          <sup>1</sup>/<sub>9</sub>
        </Number>
        <QuestionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          faucibus eget ut elementum elit massa dictum iaculis molestie.
          Consequat sed consectetur rhoncus iaculis. Integer orci id egestas
          vestibulum dui. Nulla faucibus sapien, nulla nec, in metus, tempor.
        </QuestionText>
      </Header>
      <ResponseWrapper>
        <ResponseText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          faucibus eget ut elementum elit massa dictum iaculis molestie.
          Consequat sed consectetur rhoncus iaculis. Integer orci id egestas
          vestibulum dui. Nulla faucibus sapien, nulla nec, in metus, tempor.
        </ResponseText>
        <IconErrorResponse />
      </ResponseWrapper>
      <ResponseWrapper>
        <ResponseText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          faucibus eget ut elementum elit massa dictum iaculis molestie.
          Consequat sed consectetur rhoncus iaculis. Integer orci id egestas
          vestibulum dui. Nulla faucibus sapien, nulla nec, in metus, tempor.
        </ResponseText>
        <IconRightResponse />
      </ResponseWrapper>
    </QuestionWrapper>
  );
};

export default Question;
