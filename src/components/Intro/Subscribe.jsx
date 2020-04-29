import React from "react"

export default class Subscribe extends React.Component {

  render() {
    return (

        // If a custom success page is needed, change the action attr here
        <form class="email-form" name="Subscribe" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/">
          
          <div hidden aria-hidden="true">
            <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" />
            </label>
          </div>
        
        <label for="email">
          <input name="Subscribe" id="email" type="email" placeholder="Email" required />
          <input type="hidden" name="form-name" value="Subscribe" />
        </label>

        <button type="submit">Subscribe</button>
      </form>
    )
  }
}
