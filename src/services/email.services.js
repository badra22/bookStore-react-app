import emailjs from '@emailjs/browser';

export async function sendEmail(form) {
    return emailjs.sendForm('service_4dd8f5f', 'template_ghpl0wl', form.current, {
        publicKey: "abjXIRLE6GWaPkUqm"
    });
}