// Form Validation

let formElement = document.getElementById("form_1");
let errorMessageElement = document.getElementById("error_message");

//  Adding event Listeners and creating the function.
formElement.addEventListener("submit", function(event)
{
    // This area prevents the actual form from submitting checking for the 
    // errors or if the inputs are correct.
    event.preventDefault();

    // This area is to get the username input and email input.
    let username = formElement.username.value;
    let email = formElement.email.value;

    if(!username || !email)
    {
        errorMessageElement.textContent = "";
        alert("Please fill in all the empty ");
    }
    else
    {
        errorMessageElement.textContent = "";
        alert("form submitted successfully!");
    }
});

// Toggle Button Creation.
// To do this, we first need to create a function.
function toggle_Nav_Bar()
{
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("bar");
}
