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
      <form onSubmit={this.onSubmit}>
        <label>Change password</label>
        <input
          type="password"
          autoFocus
          placeholder="Enter new password"
        />
        <br />
        <button>Save</button>
      </form>
    )
  }
}

export default PasswordForm
