"use strict";
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toForm = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
// add event to the form 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber
    // 이렇게하면 javascript returns amount as string need to change "value" as "valueAsNumber"
    );
});
