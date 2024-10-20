import { useState, useEffect } from 'react';
import axios from 'axios';

const useCsrfToken = () => {
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        const fetchCsrfToken = async () => {
            console.log("Tentative de récupération du token CSRF");
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get-csrf-token');
                console.log("Token CSRF reçu :", response.data.csrfToken);
                setCsrfToken(response.data.csrfToken);
            } catch (error) {
                console.error("Erreur lors de la récupération du token CSRF :", error);
            }
        };
        
        fetchCsrfToken();
    }, []);

    return csrfToken;
};

export default useCsrfToken;
