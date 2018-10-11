import React from 'react'

class PasswordForm extends React.Component {
  onSubmit = event => {
    const formData = new FormData()
    fetch('/change_password', {
      method: 'POST',
      body: formData
    })
  }
  render() {
    return (
      <SmartForm>
        {({ disabled, onChange }) => (
          <form onSubmit={this.onSubmit}>
            <label>Change password</label>
            <input
              onChange={onChange}
              type="password"
              autoFocus
              disabled={this.props.disabled}
              placeholder="Enter new password"
            />
            <br />
            <button disabled={disabled}>Save</button>
          </form>
        )}
      </SmartForm>
    )
  }
}

class SmartForm extends React.Component {
  constructor() {
    super()
    this.state = { disabled: true }
  }
  onChange = event => {
    const value = event.target.value
    if (value.length) this.setState({ disabled: false })
    else this.setState({ disabled: true })
  }
  render() {
    return this.props.children({
      disabled: this.state.disabled,
      onChange: this.onChange
    })
  }
}

export default PasswordForm
