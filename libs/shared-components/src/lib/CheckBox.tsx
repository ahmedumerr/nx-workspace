import React from 'react';
import * as styles from './CheckBox.css';

export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxColor = 'primary' | 'secondary' | 'success' | 'danger';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: CheckboxSize;
  color?: CheckboxColor;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size = 'md', color = 'primary', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={styles.checkboxInput({ size, color })}
        {...props}
      />
    );
  }
);

CheckBox.displayName = 'Checkbox';
