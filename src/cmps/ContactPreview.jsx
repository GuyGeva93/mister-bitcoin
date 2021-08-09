import { Component } from 'react'
import { Link } from "react-router-dom"
import contactImg from '../assets/img/contact.png'
export class ContactPreview extends Component {

  onRemoveContact = async (ev) => {
    ev.stopPropagation()
    const { removeContact, contact } = this.props
    removeContact(contact._id)
  }

  render() {
    const { contact } = this.props
    return (
      <div className="contact-preview">
        <Link to={'/contact/' + contact._id}>
          <div className="contact-preview-container">
            <img src={contactImg} alt="avatar" />
            <h4>{contact.name}</h4>
          </div>
        </Link>
        <button className="remove simple-button" onClick={this.onRemoveContact}>Delete</button>
      </div>
    )
  }
}
