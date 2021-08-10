import { Component } from 'react'
import { connect } from 'react-redux'
// import { contactService } from '../services/contactService'
import contactImg from '../assets/img/contact.png'
import { loadContact } from '../store/actions/contactActions'


class _ContactDetails extends Component {
  // state = {
  //   contact: null
  // }

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.loadContact(id)
  }

  onCloseContact = () => {
    this.props.history.push('/contact')
  }
  onEditContact = () => {
    const { id } = this.props.match.params
    this.props.history.push('/edit/' + id)
  }

  render() {
    const { contact } = this.props
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

const mapStateToProps = state => {
  return {
    contact: state.contactModule.currContact
  }
}

const mapDispatchToProps = {
  loadContact
}

// Connects the store with the component, injects it to the props
export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)

