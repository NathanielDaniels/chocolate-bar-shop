import React from 'react';
import { Form } from '../components'

export function FormContainer() {
  return (
    <Form>
      <Form.Title>
        <h1>Join In</h1>
      </Form.Title>
      <Form.InnerForm>
        inner form
      </Form.InnerForm>
    </Form>
  )
}