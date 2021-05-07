import React from 'react';
import { 
  Container, 
  Title, 
  InnerForm, 
  Text, 
  TextSmall, 
  // Link, 
  Input, 
  Error, 
  Submit, 
  Demo 
} from './styles/joinForm'

export default function Form({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Form.InnerForm = function FormInnerForm({ children, ...restProps }) {
  return <InnerForm { ...restProps }>{ children }</InnerForm>
}

Form.Text = function formText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}
// Form.Link = function FormLink({ children, ...restProps }) {
//     return <Link {...restProps}>{children}</Link>;
// }

Form.Input = function formInput({...restProps}) {
  return <Input {...restProps}/>
}

Form.Error = function formError({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}

Form.Submit = function formSubmit({children, ...restProps}) {
  return <Submit {...restProps}>{children}</Submit>
}

Form.Demo = function formDemo({children, ...restProps}) {
  return <Demo {...restProps}>{children}</Demo>
}