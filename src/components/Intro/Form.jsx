// some input state examples from Shrieve

import React, { useState } from 'react'

// if you just have one input
const Input = () => {
  const [value, setValue] = useState('email')

  // everytime input gets a change, an onChange event is fired
  const handleChange = event => setValue(event.target.value)
  const handleClick = () => doSomethingWith(value)

  return (
    <form>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>subscribe</button>
    </form>
  )
}


// embed code from Buttondown

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



//  ----------------------------------------------------------------------------




// if you have more than one input
// const Form = () => {
//   // now values is an object with the inputs as key-value pairs
//   // intial value is an empty object {}
//   const [values, setValues] = useState({})

//   const handleChange = event =>
//     setValues(v => ({
//       // spread out the existing values
//       ...v,
//       // the event also contains the name of the input if it has one
//       // this will replace the value with this name
//       [event.target.name]: event.target.value
//     }))

//   const handleClick = () => doSomethingWith(values.a, values.b, values.c)

//   return (
//     // it doesnt have to be in a form
//     <form>
//       {/* make sure each input has a name that matches the value */}
//       <input value={values.a} name='a' onChange={handleChange} />
//       <input value={values.b} name='b' onChange={handleChange} />
//       <input value={values.c} name='c' onChange={handleChange} />

//       <button onClick={handleClick}>action</button>
//     </form>
//   )
// }






















// Not sure where this version of a form came from ?

// import React from "react"
// export default class ButtonDown extends React.Component {
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
//   handleSubmit = event => {
//     event.preventDefault()
//     alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>

//             <input
//             type="email"
//             name="email"
//             id="bd-email" 
//             value="Email updates"
//             value={this.state.firstName}
//             onChange={this.handleInputChange}
//             />
            
//             <input type="hidden" value="1" name="embed" />
//             <input type="hidden" value="python" name="embeddedFormSCD" />
//         </label>
        
//         <button type="submit">Subscribe</button>
//       </form>
//     )
//   }
// }

