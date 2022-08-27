import {useRef} from "react";
import emailjs from '@emailjs/browser';
//import { UserAuth } from '../context/AuthContext'; 
//^once the Google Auth works

const SendEmail = () => {
    const form = useRef() 
    // const { logOut, user } = UserAuth();
    // const email_of_user = user.email
    //^after google auth
    email_of_user = "hheadstartercompanycase@gmail.com"
    //cut ^
    const for
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h961s9q', 'template_zt39vr5', form.current, '6sAjMDieGMezCxlzm')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section>
            <div className="container">
                <h2 className="--text-center">Send Email</h2>
                <form 
                onSubmit={sendEmail}
                ref = {form} 
                className="--form-control --card --flex-center --dir-column">
                    <input type="email" 
                    placeholder='To Email'
                    name='to_email'
                    required/>
                    <input type="text" 
                    placeholder='Subject'
                    name='email_subject'
                    required/>
                    <textarea name='email_message' cols="30" rows="10"></textarea>
                    <button type ="submit" 
                    className="--btn
                    --btn-primary">Send Email
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SendEmail
