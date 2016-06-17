/*
Allows user to create and store contacts that include all that
--Prototype the main contacts object and
--object.create() when they click add button

--When adding contact, existing contacts should show at bottom

--When existing contacts are selected, it should display on the right side

--Minimum information:
----First Name, Last Name, Phone Number
*/

/*------------------ MAIN CODE BODY ------------------*/
$(document).ready(function () {

  /*------------------ FUNCTIONS ------------------*/

  function addContact() {
    var newContact = Object.create(contactModel);

    for (var i = 0 ; i < inputList.length ; i++) {
        var inputValue = '.input-' + inputList[i];

        newContact[inputList[i]] = $(inputValue).val();
    }
    contactList.push(newContact);

    $('.contacts-book').show();
    $('.contact-list').append('<li>' + )
  }

  function displayContact() {

  }

  function isValid() {
    // CHECK IF THREE INPUTS ARE FILLED IN -- FIRST, LAST, PHONE
    if (!($('.input-first').val())) {
        console.log('first');
        return false;
    } 
    if (!($('.input-last').val())) {
        console.log('last');        
        return false;
    } 
    if (!($('.input-phone').val())) {
        console.log('phone');
        return false;
    } 
    console.log('true');
    return true;
  }

  /*------------------ VARIABLES ------------------*/

  var contactModel = {
    first: 'John',
    last: 'Doe',
    phone: '111-1111',
    street: '42 Wallaby Way',
    city: 'Sydney',
    state: 'NSW'
  };

  var contactList = [];
  var inputList = ['first', 'last', 'phone', 'street', 'city', 'state'];

    /*----------------- CODE BODY -----------------*/

    // ADD BUTTON RESPONSE

    $('.add-button').click(function() {
        console.log('added');

        // IF CHECK REQUIREMENTS === TRUE
        if ( isValid() ) {

            //ADD CONTACT
            addContact();

        } else {

            // ADD ASTERISK AND ASK THE USER TO FILL-IN
        }

    });

});
