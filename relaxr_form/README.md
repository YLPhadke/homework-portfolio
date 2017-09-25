# Local Storage Lab

In this lab you are going to user your knowledge of HTML5 forms and javascript to create a user settings page that saves information that the user enters into the browser cache with localStorage.

**There is no starter code for this lab. You will be creating everything from scratch!**

## Phase 1 - The form

1. Create an `index.html` page. This is where the settings form will go.

2. Add your boilerplate HTML (head, body, etc).

3. This is optional, but suggested - create a stylesheet (`css/styles.css`) and link it to you HTML. Style as you go to make the form appealing.

4. Create a div with the id `form-container`.

5. Create a form inside the form container. Give your form an id of `settings-form`.

6. Add the various inputs to collect user data. You are required to collect all of the information listed below, however, you can add any other elements to the form you desire to collect more user info. Use your best judgement to determine what **kind** of form element to user to collect the information required (select vs. checkbox vs. text input, etc.)

  - First name
  - Last name
  - Email
  - Password
  - Date of birth
  - Favorite color
  - Highest level of education
  - Phone number
  - Bio
  - Gender
  - Favorite programming language(s) (BONUS - use checkboxes)
  - Years programming

7. Add a submit button to the form.

## Phase 2 - Saving the form data

1. Create a `js/index.js` file and add a script tag in the head of your HTML to link it.

2. Add a script tag to import jQuery.

3. Use `$(document).ready()` so your javascript executes at the right time.

4. Add a `submit` listener to your form element (use its id). The function that you pass in should be called `saveFormData`. Hint: `$('something').submit(myFunction)`

5. Create a function called `saveFormData`. In this function, you should use `event.preventDefault()` to stop the default form submission behavior. Make sure to list the `event` as a parameter in your function definition.

6. Complete the function by using jQuery to get the values from all of you inputs and store them in variables.

7. Use `localStorage.setItem` to save all of the data in the browser cache. Confirm this works by using `localStorage.getItem` in your Chrome console to inspec the values you've saved.

## Phase 3 - Displaying the saved data

1. In your javascript file, get all of the values from the browser cache using `localStorage.getItem` and store them in variables. This **does not** happen inside of your saveFormData function.

2. Use jQuery to set the values of the inputs of the form.
