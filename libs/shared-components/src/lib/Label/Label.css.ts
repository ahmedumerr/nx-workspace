import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../theme/global.css';

export const label = recipe({
  base: {
    color: vars.text,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    userSelect: 'none',
    ':disabled': {
      color: vars.disabled,
      cursor: 'not-allowed',
    },
  },
  variants: {
    size: {
      sm: { fontSize: '12px' },
      md: { fontSize: '14px' },
      lg: { fontSize: '16px' },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});