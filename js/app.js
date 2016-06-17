/*
Allows user to create and store contacts that include all that
--Prototype the main contacts object and
--object.create() when they click add button

--When adding contact, existing contacts should show at bottom

--When existing contacts are selected, it should display on the right side

--Minimum information:
----First Name, Last Name, Phone Number, State
*/

/*------------------ MAIN CODE BODY ------------------*/
$(document).ready(function () {

  /*------------------ FUNCTIONS ------------------*/

  function addContact() {
    var newContact = Object.create(contactModel);

    for (var i = 0; i < inputList.length; i++) {
      var inputValue = '.input-' + inputList[i];
      newContact[inputList[i]] = $(inputValue).val();
    }
    contactList.push(newContact);

    $('.contacts-book').show();
    $('.contact-list')
      .append('<li value="' + contactNumber + '"><a href=#' + '>' + newContact.first + ' ' + newContact.last + '</a></li>')

    contactNumber++;
    $('input[type="text"]').val(null);
  }

  function displayContact(contact) {
    var address = "";
    $('.selected-contact h2').text(contactList[contact].first + ' ' + contactList[contact].last);
    $('.first-name').text("First Name: " + contactList[contact].first);
    $('.last-name').text("Last Name: " + contactList[contact].last);
    $('.phone-number').text("Phone Number: " + contactList[contact].phone);

    if (contactList[contact].street !== '') {
        address = address + contactList[contact].street + ', ';
    }
    if (contactList[contact].city !== '') {
        address = address + contactList[contact].city + ', ';
    }

    $('.address-list').html('<li>' + address + contactList[contact].state + '</li>');
    $('.selected-contact').show();
  }

  function isValid() {
    // CHECK IF FOUR INPUTS ARE FILLED IN -- FIRST, LAST, PHONE
    if (!($('.input-first').val())) {
      return false;
    }
    if (!($('.input-last').val())) {
      return false;
    }
    if (!($('.input-phone').val())) {
      return false;
    }
    if (!($('.input-state').val())) {
      return false;
    }
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
  var contactNumber = 0;

  /*----------------- CODE BODY -----------------*/

  // ADD BUTTON RESPONSE

  $('.add-button').click(function () {
    console.log('added');

    // IF CHECK REQUIREMENTS === TRUE
    if (isValid()) {

      //ADD CONTACT
      addContact();
      $('.is-required').text('');
      
    } else {

      // ADD ASTERISK AND ASK THE USER TO FILL-IN
      $('.is-required').text(' *Required');
    }

  });

  $('.contact-list').on('click', 'li', function () {
    var currentContact = $(this).val();
    // displays contacts
    displayContact(currentContact);
  });

});
