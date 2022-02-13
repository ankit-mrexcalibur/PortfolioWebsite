import "./contact.css";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact= ()=> {
    const formRef= useRef();
    const [done,setDone]= useState(false);

    const handleSubmit= (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_l3cqie7',
            'template_xj8s9yi',
            formRef.current, 
            'user_GjWZXfd04JRBiFDZ76Lf1')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Wanna discuss your project?</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src="https://img.icons8.com/dusk/64/000000/apple-phone.png"
                                alt=""
                                className="c-icon"
                            />
                            +91 9810104746
                        </div>
                        <div className="c-info-item">
                            <img 
                            src="https://img.icons8.com/fluency/48/000000/email-open.png"
                            className="c-icon"
                            />
                            ankit19020@iiitd.ac.in
                        </div>
                        <div className="c-info-item">
                            <img 
                                src="https://img.icons8.com/color/48/000000/address--v1.png"
                                className="c-icon"
                            />
                            Freedom Fighters Enclave, Delhi-68, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch, always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && alert("Will get back to you soon!")}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;