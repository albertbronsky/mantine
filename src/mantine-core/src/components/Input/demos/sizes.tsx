import React from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Input } from '../Input';

const code = `
<Input size="xl" placeholder="xl input size" />
`;

function Demo() {
  const inputs = MANTINE_SIZES.map((size, index) => (
    <Input
      style={{ marginTop: index === 0 ? 0 : 15 }}
      size={size}
      key={size}
      placeholder={`${size} input size`}
    />
  ));
  return <>{inputs}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
