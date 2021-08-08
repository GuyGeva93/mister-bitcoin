import { Component } from 'react'

export class ContactPreview extends Component {

  state = {
    currContact: null
  }

  onSetContact = (ev) => {
    ev.stopPropagation()
    const { contact } = this.props
    this.setState({ currContact: null }, () => {
      this.setState({ currContact: contact })
    })
    // const { contact } = this.props
    // console.log(this.props.contact._id)
    // this.setState({ currContact: contact }, () => {
    //   console.log(this.state)
    // })
  }

  closeContact = (ev) => {
    ev.stopPropagation()
    this.setState({ currContact: null })
  }

  render() {
    const { contact } = this.props
    const { currContact } = this.state
    return (
      <div>
        {!currContact && <div className="contact-preview" onClick={this.onSetContact}>
          <span>-AVATAR-</span>
          <h4>{contact.name}</h4></div>}

        {currContact && <section className="contact-preview-details">
          <button onClick={this.closeContact}>Close</button>
          <div className="avatar">AVATAR</div>
          <h3>Name: {currContact.name}</h3>
          <h5>Phone: {currContact.phone}</h5>
          <h5>Email: {currContact.email}</h5>
        </section>}
      </div>

    )
  }
}
