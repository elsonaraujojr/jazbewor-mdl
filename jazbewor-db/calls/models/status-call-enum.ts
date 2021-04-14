export enum StatusCallEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  CONCLUDED = 'CONCLUDED'
}

export const getStatusCallEnum = () => [
  StatusCallEnum.IN_PROGRESS,
  StatusCallEnum.PENDING,
  StatusCallEnum.CONCLUDED
];

export const getToDropDownStatusCallEnum = () => [
  { label: 'In progress', value: StatusCallEnum.IN_PROGRESS },
  { label: 'Pending', value: StatusCallEnum.PENDING },
  { label: 'Concluded', value: StatusCallEnum.CONCLUDED }
];

export const getShowStatusCallEnum = (statusCall: StatusCallEnum) => {
  if (statusCall === StatusCallEnum.IN_PROGRESS) {
    return 'In progress';
  } else if (statusCall === StatusCallEnum.PENDING) {
    return 'Pending';
  } else if (statusCall === StatusCallEnum.CONCLUDED) {
    return 'Concluded';
  }
};
