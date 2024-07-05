/* write functions that auto fill for biilling address*/
function autoFill() {
  if (document.getElementById("tick").checked) {
    var tick = document.getElementById("add").value;
    console.log(tick);
    if (tick == "") {
      alert("Please fill in address");
      document.getElementById("tick").checked = false;
    } else {
      document.getElementById("bill").value = tick;
    }
  }
}

/*Write a function that hide and show address when we choose "delivery" or "pickup " */
function showAddress() {
  console.log("Test");
  document.getElementById("address").style.display = "block";
}

function hideAddress() {
  console.log("Test");
  document.getElementById("address").style.display = "none";
}
function showPayment() {
  console.log("Test");
  document.getElementById("payment").style.display = "block";
}
function hidePayment() {
  console.log("Test");
  document.getElementById("payment").style.display = "none";
}
/* write functions that define the action for each event */
function validate() {
  console.log("Testing");
  var bill = document.getElementById("bill").value;
  var add = document.getElementById("add").value;
  var email = document.getElementById("email").value;
  var postcode = document.getElementById("postcode").value;
  var credit = document.getElementById("credit").value;
  var name = document.getElementById("name").value;
  var ccv = document.getElementById("ccv").value;
  var country = document.getElementById("country").value;
  var city = document.getElementById("city").value;
  var input2 = document.getElementById("input2").value;
  var input1 = document.getElementById("input1").value;
  var delivery = document.getElementById("delivery").checked;
  var pickup = document.getElementById("pickup").checked;
  var pick = document.getElementById("pick").checked;
  var online = document.getElementById("online").checked;
  var visa = document.getElementById("visa").checked;
  var card = document.getElementById("card").checked;
  var express = document.getElementById("express").checked;
  var errMsg = ""; /* stores the error message */
  var result = true; /* assumes no errors */

  if (document.getElementById("visa").checked) {
    if (credit.length != 16) {
      errMsg += "Visa NO must be 16 characters. \n";
    }
  }
  if (document.getElementById("card").checked) {
    if (credit.length != 16) {
      errMsg += "Master Card NO must be 16 characters. \n";
    }
  }
  if (document.getElementById("express").checked) {
    if (credit.length != 15) {
      errMsg += "American Express must be 15 characters \n";
    }
  }
  if (document.getElementById("delivery").checked) {
    if (add == "") {
      errMsg += "Address can not be empty. \n";
    }
  }
  if (delivery == "" && pickup == "") {
    errMsg += "You must select 1 option. \n";
  }
  if (pick == "" && online == "") {
    errMsg += "You must select pay on pickup or pay on online. \n";
  }
  if (document.getElementById("online").checked) {
    if (visa == "" && card == "" && express == "") {
      errMsg += "You must select card. \n";
    }
  }
  if (document.getElementById("online").checked) {
    if (ccv == "") {
      errMsg += "CCV cannot be empty. \n";
    }
  }
  if (document.getElementById("online").checked) {
    if (input2 == "") {
      errMsg += "Date must be selected. \n";
    }
  }
  if (document.getElementById("online").checked) {
    if (input1 == "") {
      errMsg += "Month must be selected. \n";
    }
  }
  if (document.getElementById("online").checked) {
    if (credit == "") {
      errMsg += "Credit card NO cannot be empty. \n";
    }
  }
  if (bill == "") {
    errMsg += "Billing address cannot be empty. \n";
  }
  if (email == "") {
    errMsg += "Email cannot be empty. \n";
  }
  if (postcode == "") {
    errMsg += "Post code cannot be empty. \n";
  }
  if (postcode.length < 4) {
    errMsg += "Post code must be at least 4 characters. \n";
  }

  if (country == "") {
    errMsg += "Country must be selected. \n";
  }

  if (city == "") {
    errMsg += "City must be selected. \n";
  }
  if (errMsg != "") {
    alert(errMsg);
    result = false;
  }
  return result;
}
/* link HTML element to corresponding event function*/
function init() {
  var order = document.getElementById("order");
  order.onsubmit = validate;
}
/* display on screen*/
window.onload = init;
