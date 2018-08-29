import React from 'react'

class PasswordForm extends React.Component {
  constructor() {
    super()
    this.state = { disabled: true }
  }
  onChange = event => {
    const value = event.target.value
    if (value.length) this.setState({ disabled: false })
    else this.setState({ disabled: true })
  }
  onSubmit = event => {
    const formData = new FormData()
    fetch('/change_password', {
      method: 'POST',
      body: formData
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Change password</label>
        <input
          onChange={this.onChange}
          type="password"
          autoFocus
          placeholder="Enter new password"
        />
        <br />
        <button disabled={this.state.disabled}>Save</button>
      </form>
    )
  }
}

export default PasswordForm
