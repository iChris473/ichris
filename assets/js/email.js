
const form = document.querySelector(".thisForm")
const userEmail = document.querySelector(".userEmail")
const fullName = document.querySelector(".fullName")
// const messageSubject= document.querySelector(".messageSubject")
const messageText = document.querySelector(".messageText")
const submitBtn = document.querySelector(".submitBtn")

form.addEventListener("submit", e => {
    e.preventDefault()
    submitBtn.value = "Sending..."
    emailjs.sendForm(      
    "service_6sz43og",
    "template_oxh8kim",
    form,
    "user_GZoXBKzJqzFLxxYVoFFk0"
)
.then(function (response) {
    submitBtn.value = "Send Message"
    console.log('SUCCESS!', response.status, response.text)
    fullName.value = ""
    messageText.value = ""
    userEmail.value = ""
    window.alert("Message Successfully sent! Thanks for your interest in my service, I will reach out to you as soon as I can.");

}, function (err) {
    console.log('FAILED...', err);
    submitBtn.value = "Send Message";
    window.alert("Oops! An error occured while trying to send message");
});
})
