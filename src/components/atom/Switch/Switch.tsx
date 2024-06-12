import { useEffect, useState, type FC } from 'react';
import { ToggleContainer, ToggleSwitch } from './Switch.styled';
import type { SwitchProps } from './types';

export const Switch: FC<SwitchProps> = ({ onChange, value, defaultValue }) => {
  const [isOn, setIsOn] = useState(!!defaultValue);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setIsOn(value);
    }
  }, []);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange && onChange(!isOn);
  };

  return (
    <ToggleContainer isOn={isOn} onClick={toggleSwitch}>
      <ToggleSwitch isOn={isOn} />
    </ToggleContainer>
  );
};
