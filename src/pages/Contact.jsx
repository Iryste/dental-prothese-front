import React from 'react';
import Form from '../components/contact/Form';
import SimpleCsrfTokenFetcher from '../components/Tokengetter';

const Contact = () => {
    return (
        <div>
            < Form />
            {/* <SimpleCsrfTokenFetcher /> */}
        </div>
    );
};

export default Contact;