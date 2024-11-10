import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_7y43k5q',  
      'template_iv7b696',  
      { email: email },     
      '1X759nOOs4mZtH5sJ'   
    )
    .then(() => {
      alert('Subscription successful');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Subscription failed');
    });
  };

  return (
    <div className="nava">
        <div className="wrapw">
            <div className="foot-text">
                <p>SIGN UP FOR OUR DAILY INSIDER</p>
            </div>
            <div className="subscribe">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                />
                <button type="button" onClick={handleSubmit} className="foot-button">
                    Subscribe
                </button>
            </div>
        </div>
    </div>
  );
}

export default Email;
