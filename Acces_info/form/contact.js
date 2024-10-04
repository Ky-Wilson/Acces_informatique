// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const number = document.getElementById('number');
// const subject = document.getElementById('subject');
// const message = document.getElementById('message');

// const submit = document.getElementsByClassName('form')[0];

// submit.addEventListener('submit', (e) => {
//     e.preventDefault();
//    console.log("clicked");


//    let emailbody = `
//     Name: ${name.value} <br> 
//     Email: ${email.value} <br>
//     Number: ${number.value} <br> 
//     Subject: ${subject.value} <br>
//     Message: ${message.value}
//     `

//    Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "yanne.kouassi@uvci.edu.ci",
//     Password : "40A5AF5F062870189898B00CD602432FC8C6",
//         To : 'will.fresh225@gmail.com',
//         From : "sitetestingad@gmail.com",
//         Subject : "Vous avez une nouvelle demande " + " " + name.value,
//         Body : emailbody
// }).then(
//     message => {
//       if(message == 'OK'){
//         Swal.fire({
//           title: "Merci pour votre message!",
//           text: "Message bien envoyè, nous vous repondrons dans les plus bref delais!",
//           icon: "success"
//         });
//       }
//       form.reset();
//     }
//     );
// })
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     sendEmail();
// })


// Sélection des éléments du formulaire
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const form = document.getElementsByClassName('form')[0]; // Sélection du formulaire

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("clicked");

    let emailbody = `
      Name: ${name.value} <br> 
      Email: ${email.value} <br>
      Number: ${number.value} <br> 
      Subject: ${subject.value} <br>
      Message: ${message.value}
    `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "yanne.kouassi@uvci.edu.ci",
        Password: "40A5AF5F062870189898B00CD602432FC8C6",
        To: 'will.fresh225@gmail.com',
        From: "sitetestingad@gmail.com",
        Subject: "Vous avez une nouvelle demande " + " " + name.value,
        Body: emailbody
    }).then(
        response => {
            if (response == 'OK') {
                Swal.fire({
                    title: "Merci pour votre message!",
                    text: "Message bien envoyé, nous vous répondrons dans les plus brefs délais!",
                    icon: "success"
                });
                // Réinitialiser le formulaire après l'envoi
                form.reset();
            } else {
                Swal.fire({
                    title: "Erreur!",
                    text: "Votre message n'a pas pu être envoyé. Veuillez réessayer.",
                    icon: "error"
                });
            }
        }
    );
});
