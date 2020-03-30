import React from "react"
export default class ButtonDown extends React.Component {
  state = {
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>

            <input
            type="email"
            name="email"
            id="bd-email" 
            value="Email updates"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            />
            
            <input type="hidden" value="1" name="embed" />
            <input type="hidden" value="python" name="embeddedFormSCD" />
        </label>
        
        <button type="submit">Subscribe</button>
      </form>
    )
  }
}


// values I need to setup up in a react form

// <form
//                 action="https://buttondown.email/api/emails/embed-subscribe/creativedirectory"
//                 method="post"
//                 target="popupwindow"
//                 onsubmit="window.open('https://buttondown.email/creativedirectory', 'popupwindow')"
//                 class="embeddable-buttondown-form"
//               >

//                 <input type="email" name="email" id="bd-email" value="Email updates" />
//                 <input type="hidden" value="1" name="embed" />
//                 <input type="hidden" value="python" name="embeddedFormSCD" />
//                 <input type="submit" value="Subscribe" />
//               </form>