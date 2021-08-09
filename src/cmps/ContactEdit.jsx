import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {
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

  render() {
    const {contact} = this.state
    if (!contact) return <div>Loading..</div>
    return (
      <div>
        EDIT
        {JSON.stringify(contact)}
      </div>
    )
  }
}
