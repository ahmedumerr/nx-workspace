import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../theme/global.css';

export const checkboxInput = recipe({
  base: {
    border: `1px solid ${vars.border}`,
    borderRadius: '4px',
    accentColor: vars.checked,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':disabled': {
      cursor: 'not-allowed',
      borderColor: vars.disabled,
    },
  },
  variants: {
    size: {
      sm: { width: 12, height: 12 },
      md: { width: 16, height: 16 },
      lg: { width: 20, height: 20 },
    },
    color: {
      primary: { accentColor: vars.primary },
      secondary: { accentColor: vars.secondary },
      success: { accentColor: vars.success },
      danger: { accentColor: vars.danger },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});