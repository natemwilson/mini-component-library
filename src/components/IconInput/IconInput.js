import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper size={size}>
      <IconWrapper>
        <Icon id={icon} size={size === 'small' ? 16 : 24} strokeWidth={2}/>
      </IconWrapper>
      <VisuallyHidden>
        <label>
          {label}
        </label>
      </VisuallyHidden>
      <Input type="text" width={width} placeholder={placeholder} size={size}/>
    </Wrapper>
  );
};

const IconWrapper = styled.span`
  padding-bottom: 2px;
  padding-right: 10px;
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  border: none;
  width: ${p => p.width}px;
  color: ${COLORS.gray700};
  font-weight: 700;
  font-size: ${p => 
    (p.size === 'small' && '14px') || 
    (p.size === 'large' && '18px')
  };
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: ${COLORS.gray500};
    font-size: ${p => 
      (p.size === 'small' && '14px') || 
      (p.size === 'large' && '18px')
    };
    font-weight: 400;
  }
`;

const Wrapper = styled.div`
  border-bottom: ${p => p.size === 'small' ? '1px': '2px'} solid black;
  display: inline-flex;
  padding-bottom: 2px;
  padding-top: 4px;
  &:focus-within {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset:4px;
  }
  &:hover ${IconWrapper} {
    color:black;
  }
  &:hover ${Input} {
    color:black;
  }
`;

export default IconInput;
