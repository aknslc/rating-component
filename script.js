const numbers = document.querySelectorAll(".number");
const submit = document.querySelector(".submit");
const rating = document.querySelector(".rating");
const frontCard = document.querySelector(".card-content");
const backCard = document.querySelector(".back-card-content");



// Handle submit button 
submit.addEventListener('click', function(){
    frontCard.style.display = "none";
    backCard.style.display = "block";
});




numbers.forEach(number => {
    number.addEventListener('click', () => {
        const user_rate = number.innerHTML;
        rating.innerHTML = `You selected ${user_rate} out of 5`;
    })

});