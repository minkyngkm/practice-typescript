import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("Jane", "Cleaning", 200);
const invTwo = new Invoice("Kim", "babysitting", 100);
// console.log( invOne,invTwo)
// make an array that has instances 
let invoices = [];
// type 지정하고, declare 까지 한 거.
invoices.push(invOne);
invoices.push(invTwo);
// console.log( invoices)
invoices.forEach(inv => console.log(inv.client, inv.details, inv.amount, inv.format()));
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// add event to the form 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber
    // 이렇게하면 javascript returns amount as string need to change "value" as "valueAsNumber"
    );
});
