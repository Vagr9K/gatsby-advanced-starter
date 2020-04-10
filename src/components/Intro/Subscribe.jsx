import React from "react"

export default class Subscribe extends React.Component {
//   state = {
//     email: "",
//   }

//   handleInputChange = event => {
//     const target = event.target
//     const value = target.value
//     const name = target.name

//     this.setState({
//       [name]: value,
//     })
//   }


// handleChange = e => this.setState({ [e.target.name]: e.target.value });

// handleSubmit = e => {
// fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: encode({ "form-name": "contact", ...this.state })
// })
//     .then(() => alert("Success!"))
//     .catch(error => alert(error));

// e.preventDefault();
// };




  
  

  render() {
    return (

        <form class="email-form" name="Subscribe" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          
          <div hidden aria-hidden="true">
            <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" />
            </label>
          </div>
        
        <label>
          <input name="Subscribe" type="email" placeholder="Email" required />
          <input type="hidden" name="form-name" value="Subscribe" />
        </label>

        <button type="submit">Subscribe</button>
      </form>
    )
  }
}

{/* Subscribe form, uses Netlify ss function */}
{/* <form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
<div hidden aria-hidden="true">
  <label>
    Don’t fill this out if you're human: 
    <input name="bot-field" />
  </label>
</div>
<label for="email">Your email address</label>
<div>
  <input type="email" name="email" placeholder="Email"  id="email" required />
  <input type="hidden" value="python" name="embeddedFormNetlify" />
  <button type="submit">Subscribe</button>
</div>
</form> */}