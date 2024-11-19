import emailjs from "emailjs-com";

export const sendEmail = (email) => {
  return emailjs.send(
    "service_h3q7fxn", 
    "template_iv7b696", 
    { email },          
    "1X759nOOs4mZtH5sJ" 
  );
};
