const inputs = document.querySelectorAll(".forms");
const form = document.querySelector(".form");
const contactNumber = document.querySelector(".contact_number");
const info = document.querySelector('.form__info')
const emailSend = {
  name: "",
  email: "",
  title: "",
  message: "",
};
emailjs.init("user_A1R6X0ueqNwTH2EBpvaAc");
const submit = (e) => {
  console.log(e);
  e.preventDefault();
  contactNumber.value = (Math.random() * 100000) | 0;
  inputs.forEach((input) => {
    const value = input.value;
    const id = input.id;
    switch (id) {
      case "name":
        emailSend.name = value;
        break;
      case "email":
        emailSend.email = value;
        break;
      case "title":
        emailSend.title = value;
        break;
      case "message":
        emailSend.message = value;
        break;
      default:
        console.error("Nie Znaleziono formularza");
        break;
      }
      input.value = ""
  });
  info.textContent = "Email został wysłany!"
  emailjs.send("service_pummlk7", "template_0qzolki", emailSend).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.error("FAILED...", error);
          info.textContent = "Email nie został wysłany! Prosimy spróbować później";
    }
  );
};

form.addEventListener("submit", submit);
