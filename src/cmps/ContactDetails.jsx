import { Component } from 'react'
import { contactService } from '../services/contactService'
import contactImg from '../assets/img/contact.png'


export class ContactDetails extends Component {
  state = {
    contact: null
  }

  componentDidMount() {
    this.loadContact()
  }

  loadContact = async () => {
    const { id } = this.props.match.params
    const contact = await contactService.getContactById(id)
    this.setState({ contact })
  }

  onCloseContact = () => {
    this.props.history.push('/contact')
  }
  onEditContact = () => {
    const { id } = this.props.match.params
    this.props.history.push('/edit/' + id)
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading..</div>
    return (
      <div>
        <section className="contact-details">
          <img src={contactImg} alt="avatar" />
          <h3>{contact.name}</h3>
          <h5>{contact.phone}</h5>
          <h5>{contact.email}</h5>
          <section className="options">
            <button onClick={this.onCloseContact}>Close</button>
            <button onClick={this.onEditContact}>Edit</button>
          </section>
        </section>
      </div>
    )
  }
}
