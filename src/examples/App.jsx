import React from 'react';
import Form from '../lib/Form/Form';
import Input from '../lib/Form/Input';
import Button from '../lib/Form/Button';

export default () => (
  <div>
    <h2>Blocks Core</h2>
    <Form>
      <Input id='email' label='E-mail' type='email' />
      <Input id='name' label='Name' type='text' />
      <Input id='lastname' label='Lastname' type='text' />
      <Button disableOnInvalid={false}>OK</Button>
    </Form>
  </div>
);
