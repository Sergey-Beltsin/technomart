var buttonDelivery = document.querySelector(".delivery-button");
var buttonGuarantee = document.querySelector(".guarantee-button");
var buttonCredit = document.querySelector(".credit-button");
var popupDelivery = document.querySelector("delivery-popup");
// var popupGuarantee = document.querySelector("guarantee-popup");
// var popupCredit = document.querySelector("credit-popup");

buttonGuarantee.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupGuarantee.classList.remove("service-hidden");
});

// buttonGuarantee.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popupGuarantee.classList.remove("service-hidden");
//     popupDelivery.classList.add("service-hidden");
//     popupCredit.classList.add("service-hidden");
// });

// buttonCredit.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popupGuarantee.classList.add("service-hidden");
//     popupDelivery.classList.add("service-hidden");
//     popupCredit.classList.remove("service-hidden");
// });

// buttonDelivery.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popupGuarantee.classList.add("service-hidden");
//     popupDelivery.classList.remove("service-hidden");
//     popupCredit.classList.add("service-hidden");
// });