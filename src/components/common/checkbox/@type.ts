export enum CheckBoxStatus {
  SELECTED = 'SELECTED',
  UNSELECTED = 'UNSELECTED',
  HOVER = 'HOVER',
  DISABLED = 'DISABLED',
}

export interface PropsType {
  className?: string;
}

export interface CheckBoxProps {
  currentStatus: CheckBoxStatus;
}
