import React from 'react'

class UserForm extends React.Component {
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
          onChange={this.props.onChange}
          type="password"
          autoFocus
          placeholder="Enter new password"
        />
        <br />
        <button disabled={this.props.disabled}>Save</button>
      </form>
    )
  }
}

function SmartForm(Component) {
  return class extends React.Component {
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
      return (
        <Component
          onChange={this.onChange}
          disabled={this.state.disabled}
          {...this.props}
        />
      )
    }
  }
}

export default SmartForm(UserForm)
