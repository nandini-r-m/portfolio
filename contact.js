// import React, { Component } from 'react';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     message: '',
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // You can perform any form submission handling here
//     // For now, let's just log the form data
//     console.log('Form data:', this.state);
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <div className="container">
//         <section id="contact">
//           <h1>Contact:</h1>
//           <h6>You can contact her through the form!</h6>
//           <ul>
//             <li>Email: <a href="mailto:poetgoneonpluto@gmail.com">poetgoneonpluto@gmail.com</a></li>
//             <li>Instagram: <a href="https://www.instagram.com/2muchofnandini/">@2muchofnandini</a></li>
//             <li>Twitter: <a href="https://twitter.com/naaanwrites">@naaanwrites</a></li>
//           </ul>
//         </section>

//         <div className="form-group">
//           <div className="inline-flexbox">
//             <form id="myForm" onSubmit={this.handleSubmit}>
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={this.state.name}
//                 onChange={this.handleInputChange}
//                 required
//               />

//               <label htmlFor="email">Email:</label>
//               <input
//                 className="form-control"
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleInputChange}
//                 required
//               />

//               <label htmlFor="message">Message:</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 name="message"
//                 value={this.state.message}
//                 onChange={this.handleInputChange}
//                 required
//               />

//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ContactForm;

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element by its ID
    const form = document.getElementById("myForm");

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form input values
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // You can replace this part with your desired action (e.g., sending data to a server)
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear form fields
        form.reset();
    });
});
