// Function to allow users to register interest in city 
// break using their name and email address

function sendEmail(contactForm) {
        emailjs.send("gmail", "heather", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "citybreak_request": contactForm.citybreaksummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            clearForm();
            alert("Thank you! You can look forward to hearing back from us soon!");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

// Function to clear form for the user after successful submission of details

function clearForm() {
  document.getElementById("form").reset();
}