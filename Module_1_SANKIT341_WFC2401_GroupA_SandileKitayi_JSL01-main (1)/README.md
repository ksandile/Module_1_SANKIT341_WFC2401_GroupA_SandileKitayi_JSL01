# [JSL01] Submission: Syntax-Engine Interaction Challenge

## Created a function called validdateSyntax, get go get my input on HTML which is "petInput" and then access the current value entered on my input field. And I had to ensure that the input string start with and followed by four digits which are (`\d{4}`) then followed by one or more alphanumeric characters (`[A-Za-zO-9]+`), since matched our strings( /^pet_\d{4}[A-Za-z0-9]+$/) we need to use a $ sign to simply signify the end of them.
## And then created an if statement using the test() method of the (valid) to check if the input string matches the pattern defined by the regular expression. It returns valid syntax if there is a match, and if else theres no macth it will return invalid syntax.

## And I've decided to make the results to hide after 3 seconds of being displayed on the screen using the (setTimeout method).