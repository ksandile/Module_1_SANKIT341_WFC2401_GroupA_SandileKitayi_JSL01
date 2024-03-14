function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    let valid = /^pet_\d{4}[A-Za-z0-9]+$/;
        // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (valid.test(input)) {
        result = 'Valid Syntax';
    } else {
        result = 'Invalid Syntax';
    }

    document.getElementById('result').innerText = result;

    // setting time out function
    setTimeout(function() {
        document.getElementById('result').innerText = ''; //sets the innerText of the result paragraph element to an empty string, effectively clearing the result after 3 seconds (3000 milliseconds). 
    }, 3000);
}


