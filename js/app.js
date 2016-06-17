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
    
  }

  function displayContact() {

  }

  function checkRequirements() {
    // CHECK IF THREE INPUTS ARE FILLED IN -- FIRST, LAST, PHONE
    if ( !($('.input-first').val()) ) {
        console.log("True");
        return true
    } else {
        return false
    }
  }

  /*------------------ VARIABLES ------------------*/

  var contactModel = {
    first: '',
    last: '',
    phone: '',
    street: '',
    city: '',
    state: ''
  }

    /*----------------- CODE BODY -----------------*/

    // ADD BUTTON RESPONSE

    $('.add-button').click(function() {
        console.log('added');
        // IF CHECK REQUIREMENTS === TRUE
        if ( checkRequirements() ) {

            //ADD CONTACT
            addContact();

        } else {

            // ADD ASTERISK AND ASK THE USER TO FILL-IN
        }

    });

});
