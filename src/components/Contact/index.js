import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(evt) {
        setFormState({...formState, [evt.target.name]: evt.target.value});
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows='5' defaultValue={message} onChange={handleChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;