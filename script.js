$(document).ready(function() {
    // Handle form submission
    $("#contact").submit(function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get form values
      var name = $("#name").val();
      var email = $("email").val();
      var message = $("#message").val();
  
      // You can store the values in an object or use them as you like
      var formData = {
        name: name,
        email: email,
        message: message
      };
  
      // Perform any other actions or processing with the form data here
      console.log(formData);
  
      // Optionally, you can make an AJAX request to send the data to the server
      // Example:
      $.post("C:\Users\nandinir\IGDTUW\portfolio proj2\message.txt", formData, function(response) {
      console.log(response);
      });
    });
  });
  function returnText(){
    let input = document.getElementById("name").ariaValueMax;
    alert(input)
  }