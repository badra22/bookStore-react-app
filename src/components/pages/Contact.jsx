import { useRef } from "react";
import { sendEmail } from "../../services/email.services";
import { fireSuccessAlert, fireErrorAlert } from "../../services/alert.services";

function Contact() {

    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form.current);
        sendEmail(form).then(fireSuccessAlert, fireErrorAlert);
    }
    return (
        <>
        <form onSubmit={handleSubmit} className="container-sm" ref={form}>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" name="email" />
            </div>
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="3" name="comments"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send</button>
        </form>
        </>
     );
}

export default Contact;