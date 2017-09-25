$(document).ready(function() {
  $('#settings-form').submit(saveFormData);

  function saveFormData(event) {
    event.preventDefault();

    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var dob = $('#dob').val();
    var phone = $('#phone').val();
    var gender = $('input[name="gender"]:checked').val();
    var education = $('#education').val();
    var color = $('#color').val();
    var bio = $('#bio').val();
    var yearsProgramming = $('#years-programming').val();

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('dob', dob);
    localStorage.setItem('phone', phone);
    localStorage.setItem('gender', gender);
    localStorage.setItem('education', education);
    localStorage.setItem('color', color);
    localStorage.setItem('bio', bio);
    localStorage.setItem('yearsProgramming', yearsProgramming);
  }

  function populateForm() {
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');
    var dob = localStorage.getItem('dob');
    var phone = localStorage.getItem('phone');
    var gender = localStorage.getItem('gender');
    var education = localStorage.getItem('education');
    var color = localStorage.getItem('color');
    var bio = localStorage.getItem('bio');
    var yearsProgramming = localStorage.getItem('yearsProgramming');

    $('#first-name').val(firstName);
    $('#last-name').val(lastName);
    $('#email').val(email);
    $('#password').val(password);
    $('#dob').val(dob);
    $('#phone').val(phone);
    $('input[name="gender"][value="'+ gender +'"]').prop('checked', true);
    $('#education').val(education);
    $('#color').val(color);
    $('#bio').val(bio);
    $('#years-programming').val(yearsProgramming);
  }

  populateForm();
});

