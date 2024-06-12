import styled from 'styled-components';
import { SwitchInterface } from './types';

export const ToggleContainer = styled.div<SwitchInterface>`
  width: 50px;
  min-width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isOn ? '#4caf50' : 'grey')};
  border-radius: 25px;
  padding: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
`;

export const ToggleSwitch = styled.div<SwitchInterface>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${(props) => (props.isOn ? 'translateX(24px)' : 'translateX(0px)')};
`;

ToggleContainer.shouldForwardProp = (prop) => !['isOn'].includes(prop);
ToggleSwitch.shouldForwardProp = (prop) => !['isOn'].includes(prop);
