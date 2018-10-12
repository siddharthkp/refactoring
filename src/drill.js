import React from 'react'

/* feature code */

const ProfileForm = props => {
  return (
    <Form>
      <TextInput placeholder="username" />
      <TextInput type="password" placeholder="password" />
      <TextInput type="password" placeholder="confirm" />
      <Button>Save</Button>
    </Form>
  )
}

const DrillExample = props => {
  return <ProfileForm />
}

/* reusable components */

const { Provider, Consumer } = React.createContext()

const TextInput = props => {
  return (
    <input
      type={props.type || 'text'}
      className="input"
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  )
}

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      className="button"
      {...props}
    />
  )
}

const Form = props => {
  return <form className="form">{props.children}</form>
}

export default DrillExample
