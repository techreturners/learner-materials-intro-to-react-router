export type ReasonForContact =
  | 'NOT_SELECTED'
  | 'rudeness'
  | 'lift'
  | 'vegetables'
  | 'united'
  | 'talk';

export type ConfessFormData = {
  subject: string;
  reasonForContact: ReasonForContact;
  message: string;
};

export type ConfessFormChangeHandler = <TKey extends keyof ConfessFormData>(
  value: ConfessFormData[TKey],
  name: TKey
) => void;
