
   (function(){
      emailjs.init({
        publicKey: "nbv_OSluIIXZhP2Jt",
      });
   })();


function sendmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        amount : document.getElementById("amount").value,
        subject: document.getElementById("subject").value
    }
    emailjs.send("service_8323737","template_79rhydl",parms).then(alert("Email is successfully sent !"));
}

    
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('contact_service', 'contact_form', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }
   