//business logic
function Contact(first, last, street, city, state, country) {
  this.firstName = first;
  this.lastName = last;
  this.street = street;
  this.city = city;
  this.state = state;
  this.country = country;

}

// user interface logic
$(document).ready(function() {
  $("form#addressBookForm").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedstreet = $("input#street").val();
    var inputtedcity = $("input#city").val();
    var inputtedstate = $("input#state").val();
    var inputtedcountry = $("input#country").val();


    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedstreet, inputtedcity, inputtedstate, inputtedcountry);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.street +   " "+ newContact.city + " " + newContact.state +"</span></li>");
    $("ul#contacts").append("<li><span class='contact'>" + newContact.country + "</span></li>");


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#street").val("");
    $("input#city").val("");
    $("input#state").val("");
    $("input#country").val("");
  });
});
$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".street").text(newContact.street);
  $(".city").text(newContact.city);
  $(".state").text(newContact.state);
  $(".country").text(newContact.country);
});
