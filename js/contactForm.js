function sendEmail(params){
    var tempParams = {
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        company:document.getElementById("lastname").value,
        message:document.getElementById("message").value,

    }
    emailjs.send("alfonso25elorriaga", "template_twea4g9",tempParams)
        .then(function(res){
            console.log("succes", res.status);
        })
}
