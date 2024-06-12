export interface SwitchInterface {
  isOn?: boolean;
}

export interface SwitchProps {
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
  value?: boolean;
}
