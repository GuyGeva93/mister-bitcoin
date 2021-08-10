import { Component, createRef } from 'react'
import { connect } from 'react-redux'
// import { contactService } from '../services/contactService'
import { loadContact, saveContact } from '../store/actions/contactActions'


class _ContactEdit extends Component {

  inputRef = createRef()

  state = {
    contact: null,
    headline: null
  }

  async componentDidMount() {
    // try {
    //   const id = this.props.match.params.id
    //   const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact()
    //   const headline = id ? 'Edit contact' : 'Add new contact'
    //   this.setState({ contact, headline }, () => this.inputRef.current.focus())
    // } catch (err) {
    //   this.setState({ errMsg: 'Cannot Find Contact' })
    // }
    const { id } = this.props.match.params
    const headline = id ? 'Edit contact' : 'Add new contact'
    await this.props.loadContact(id)
    console.log(this.props.contact)
    this.setState({ headline })
    this.setState({ contact: this.props.contact })
  }

  handleChange = ({ target }) => {
    const field = target.id
    const value = target.type === "number" ? +target.value : target.value
    this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    // try {
    // await contactService.saveContact(this.state.contact)
    this.props.saveContact(this.state.contact)
    this.props.history.push('/contact')
    // } catch (err) {
    // console.log('Error on updating contact =>', err)
    // }
  }

  render() {
    if (!this.state.contact) return <div>Loading..</div>
    const { name, email, phone } = this.state.contact
    const { headline } = this.state
    return (
      <form className="simple-form contact-filter">
        <h3>{headline}</h3>
        {/* <h3>Add/edit new contact</h3> */}
        <label htmlFor="name">Name
          <input ref={this.inputRef} type="text" id="name" value={name} onChange={this.handleChange} />
        </label>

        <label htmlFor="email">Email
          <input type="text" id="email" value={email} onChange={this.handleChange} />
        </label>

        <label htmlFor="phone">Phone
          <input type="text" id="phone" value={phone} onChange={this.handleChange} />
        </label>
        <button className="simple-button" onClick={this.onSaveContact}>Add</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contactModule.currContact
  }
}

const mapDispatchToProps = {
  loadContact,
  saveContact
}

// Connects the store with the component, injects it to the props
export const ContactEdit = connect(mapStateToProps, mapDispatchToProps)(_ContactEdit)

