import { Component, createRef } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {

  inputRef = createRef()

  state = {
    contact: null
  }

  async componentDidMount() {
    try {
      const id = this.props.match.params.id
      const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
      this.setState({ contact }, () => this.inputRef.current.focus())
    } catch (err) {
      this.setState({ errMsg: 'Cannot Find Contact' })
    }
  }

  handleChange = ({ target }) => {
    const field = target.id
    const value = target.type === "number" ? +target.value : target.value
    this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    console.log(this.state.contact)
    // this.props.history.push('/contact')

  }

  render() {
    if (!this.state.contact) return <div>Loading..</div>
    const {name, email, phone} = this.state.contact
    return (
      <form className="simple-form contact-filter">
        <h3>Add new contact</h3>
        <label htmlFor="name">Name
          <input ref={this.inputRef} type="text" id="name" value={name} onChange={this.handleChange} />
        </label>

        <label htmlFor="email">Email
          <input type="text" id="email" value={email} onChange={this.handleChange} />
        </label>

        <label htmlFor="phone">Phone
          <input type="number" id="phone" value={phone} onChange={this.handleChange} />
        </label>
        <button className="simple-button" onClick={this.onSaveContact}>Add</button>
      </form>
    )
  }
}
