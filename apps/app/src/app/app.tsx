// eslint-disable-next-line @nx/enforce-module-boundaries
import { CheckBox } from "@nx-workspace/shared-components";
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Label } from "@nx-workspace/shared-components";
import { useState } from "react";

export function App() {
  const [checked, setChecked] = useState(false);
  const checkboxId = 'terms-checkbox';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CheckBox
          id={checkboxId}
          size="md"
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <Label htmlFor={checkboxId} size="md">
          Medium Primary
        </Label>
      </div>

      <Label size="lg">
        <CheckBox size="lg" color="danger" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        Large Danger
      </Label>
    </div>
  );
}

export default App;
