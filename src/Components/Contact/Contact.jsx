import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import emailjs from 'emailjs-com';
import './Contact.css';
import { ColorRing, Oval } from 'react-loader-spinner';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [success , setSuccess] = useState(false);
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(false);
    useEffect(() => {
        $('.contactContent').animate({
            height: '100%',
        }, 2000);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send('service_drs4iyo', 'template_8919lfp', formData, 'pIudS756R9EQNHk3d')
            .then((response) => {
                setLoading(false);
                console.log('SUCCESS!', response.status, response.text);
                setSuccess(true)
                setTimeout(()=>{
                    setSuccess(false)
                },2000)
                // Reset form data or show a success message
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.error('FAILED...', err);
                setLoading(false);
                setError(true)
                setTimeout(()=>{
                    setError(false)
                },2000)
                
            });
    };

    return (
        <div className="contact">
            <div className="contactContent text-white m-auto p-5">
                {success?<div className='alert alert-success'>Your Message sent Successfuly</div>:""}
                {error?<div className='alert alert-danger'>Your Message Not sent</div>:""}
                <h2 className='fs-1 fw-bold text-center'>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                    <label className='fs-3 mb-4 mt-2' htmlFor="name">Name</label>
                    <input 
                        id='name' 
                        name='name' 
                        className='form-control' 
                        type="text" 
                        value={formData.name} 
                        onChange={handleChange}
                        required 
                    />
                    <label className='fs-3 mb-4 mt-2' htmlFor="email">Email</label>
                    <input 
                        id='email' 
                        name='email' 
                        className='form-control' 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required
                    />
                    <label className='fs-3 mb-4 mt-2' htmlFor="message">Message</label>
                    <textarea 
                        id='message' 
                        name='message' 
                        className='form-control' 
                        value={formData.message} 
                        onChange={handleChange}
                        required 
                    />
                    <button className='btn btn-lg btn-success w-100 mt-4 d-flex justify-content-center align-items-center' type="submit">
                        {loading?<ColorRing
                            visible={true}
                            height="40"
                            width="40"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
                            />:"Submit"}</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;

