import { useState } from 'react';
import styles from './app.module.scss';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { CheckBox, Label } from '@nx-workspace/shared-components';

export function App() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const sizes = ['sm', 'md', 'lg'] as const;
  const colors = ['primary', 'secondary', 'success', 'danger'] as const;

  const toggleCheckbox = (key: string) => {
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CheckBox & Label Showcase</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sizes</h2>
        <div className={styles.stack}>
          {sizes.map(size => {
            const key = `size-${size}`;
            return (
              <div key={key} className={styles.row}>
                <CheckBox
                  id={key}
                  size={size}
                  color="primary"
                  checked={checked[key] || false}
                  onChange={() => toggleCheckbox(key)}
                />
                <Label htmlFor={key} size={size}>
                  {size.toUpperCase()} Checkbox
                </Label>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Colors (Medium Size)</h2>
        <div className={styles.stack}>
          {colors.map(color => {
            const key = `color-${color}`;
            return (
              <div key={key} className={styles.row}>
                <CheckBox
                  id={key}
                  size="md"
                  color={color}
                  checked={checked[key] || false}
                  onChange={() => toggleCheckbox(key)}
                />
                <Label htmlFor={key} size="md">
                  {color.charAt(0).toUpperCase() + color.slice(1)} Color
                </Label>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All Size & Color Combinations</h2>
        <div className={styles.combinations}>
          {sizes.map(size => (
            <div key={size} className={styles.comboColumn}>
              <h3 className={styles.comboTitle}>{size.toUpperCase()}</h3>
              <div className={styles.stack}>
                {colors.map(color => {
                  const key = `${size}-${color}`;
                  return (
                    <div key={key} className={styles.row}>
                      <CheckBox
                        id={key}
                        size={size}
                        color={color}
                        checked={checked[key] || false}
                        onChange={() => toggleCheckbox(key)}
                      />
                      <Label htmlFor={key} size={size}>
                        {`${size} ${color}`}
                      </Label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;