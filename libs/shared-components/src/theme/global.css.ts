import { createVar, globalStyle } from '@vanilla-extract/css';

export const vars = {
  primary: createVar(),
  secondary: createVar(),
  checked: createVar(),
  border: createVar(),
  text: createVar(),
  disabled: createVar(),
  success: createVar(),
  danger: createVar(),
};

globalStyle(':root', {
  vars: {
    [vars.primary]: '#007bff',
    [vars.secondary]: '#6c757d',
    [vars.checked]: '#007bff',
    [vars.border]: '#ccc',
    [vars.text]: '#333',
    [vars.disabled]: '#aaa',
    [vars.success]: '#28a745',
    [vars.danger]: '#dc3545',
  },
});
