function sendMail(contactForm) {
    emailjs.send("service_ymcl8ma","template_fdrf9de", { 
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
//Jquery
$(document).ready(function() {
    $("button").on("click", function() {
        $("button").html('Sent!');
        $("h2").html("Your Message has been successfully sent! Congratulations!");
   });
});
