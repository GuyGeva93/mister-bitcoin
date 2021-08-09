import { Component } from 'react'

export class ContactFilter extends Component {

  onHandleChange = (ev) => {
    const {handleChange} = this.props
    handleChange(ev)
  }

  render() {
    return (
      <form className="simple-form contact-filter">
        <h3>Filter contacts by</h3>
        <label htmlFor="name">Name
          <input type="text" id="name" onChange={this.onHandleChange} />
        </label>

        <label htmlFor="email">Email
          <input type="text" id="email" onChange={this.onHandleChange} />
        </label>

        <label htmlFor="phone">Phone
          <input type="number" id="phone" onChange={this.onHandleChange} />
        </label>
      </form>
    )
  }
}
