import React from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Typography } from './components/Typography';
import { Heading } from './components/Heading';
import { Tooltip } from './components/Tooltip';
import { Accordion } from './components/Accordion';

export const App = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '16px' }}>
      <Button variant="primary" size="lg">lg, primary</Button>
      <Button variant="primary" size="md">md, primary</Button>
      <Button variant="primary" size="sm">sm, primary</Button>
      <Button class="button-primary" size="md">Hover</Button>

      <div style={{ marginTop: '16px'}}></div>
      <Button variant="bordered" size="lg">lg, bordered</Button>
      <Button variant="bordered" size="md">md, bordered</Button>
      <Button variant="bordered" size="sm">sm, bordered</Button>
      <Button class="button-bordered" size="md">Hover</Button>

      




      <Input label="Name" placeholder="Enter your name" />
      <Input danger label="Error" placeholder="Error example" />

      <Typography textSize="sm">Small Text</Typography>
      <Typography textSize="lg">Large Text</Typography>

      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>

      <Tooltip text="This is a tooltip" position="top">
        <Button>Hover me</Button>
      </Tooltip>

      <Accordion title="Accordion Example" defaultOpen>
        Accordion content goes here.
      </Accordion>
    </div>
  );
};

export default App;
