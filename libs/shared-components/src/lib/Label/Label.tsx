import React from 'react';
import * as styles from './Label.css';
import { CheckboxSize } from '../CheckBox';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: CheckboxSize;
  children: React.ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({
  size = 'md',
  children,
  htmlFor,
  ...props
}) => {
  return (
    <label htmlFor={htmlFor} className={styles.label({ size })} {...props}>
      {children}
    </label>
  );
};
