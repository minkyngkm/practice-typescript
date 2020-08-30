"use strict";
// class ( to craete objects with the same format )
// class Invoice {
//     client: string;
//     details: string;
//     amount: number;
//     constructor ( c: string, d: string, a: number) {
//         this.client = c,
//         this.details = d,
//         this.amount = a
//     }
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`
//     }
// }
// if adding modifier before properties, you can make a class this way. 
// modifier 있을때만 가능! 
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("Jane", "Cleaning", 200);
var invTwo = new Invoice("Kim", "babysitting", 100);
// console.log( invOne,invTwo)
// make an array that has instances 
var invoices = [];
// type 지정하고, declare 까지 한 거.
invoices.push(invOne);
invoices.push(invTwo);
// console.log( invoices)
invoices.forEach(function (inv) {
    return console.log(inv.client, inv.details, inv.amount, inv.format());
});
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
