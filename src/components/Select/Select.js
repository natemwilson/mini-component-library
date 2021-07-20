import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
          {children}
      </NativeSelect>
      <ContentWrapper>
        {displayedValue}
        <IconWrapper>
          <Icon id='chevron-down' strokeWidth={2} size={24}/>
        </IconWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const IconWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: 24px;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const ContentWrapper = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: black;
  }
`;


export default Select;
