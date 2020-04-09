import React, { Component } from "react";
import { Link } from "gatsby";

const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
  })
  .catch(error => {
    form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
  })
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}

class Headline extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="logo"><Link to="/"></Link></div>
          
          <div className="intro">
            <div className="introHello">
              Cataloging the creative studios & internal design teams of the pacific northwest. 
            </div>

            {/* rename this away from 'submit' */}
            <div className="introSubmit">
              <a target="_blank" href="mailto:jonny@seattlecreative.directory">Contact</a> 
              {/* <a target="_blank" href="https://buttondown.email/creativedirectory">Subscribe</a>  */}
              {/* <a href="#">Add an entry</a>*/}
              

              {/* Subscribe form, uses Netlify ss function */}
                <form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
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
                </form>

            </div>
          
        </div>
      </React.Fragment>  
    );
  }
}

export default Headline;
