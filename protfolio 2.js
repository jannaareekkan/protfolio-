function sendMail() {

    var params = {
        names: document.getElementById("name").value,
        email: document.getElementById("Email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_34h2pcg";
    const templateID = "template_47tc1ai";

    emailjs.send(serviceID, templateID, params)

    .then(function(res) {

        document.getElementById("name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("message").value = "";

        console.log(res);

        alert("Your message sent successfully!");

    })

    .catch(function(err) {

        console.log(err);

        alert("Failed to send message");

    });
}