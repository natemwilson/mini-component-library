/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100" 
      size={size}
    >
      <BarWrapper>
        <Bar percentage={value} size={size}/>
      </BarWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
  border-radius: ${p => 
    (p.size === 'small' && '4px') || 
    (p.size === 'medium' && '4px') || 
    (p.size === 'large' && '8px')
  };
  padding: ${p => 
    (p.size === 'small' && '0px') || 
    (p.size === 'medium' && '0px') || 
    (p.size === 'large' && '4px')
  };
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${p => p.percentage}%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  height: ${p => 
    (p.size === 'small' && '8px') || 
    (p.size === 'medium' && '12px') || 
    (p.size === 'large' && '16px')
  };
`;

export default ProgressBar;
