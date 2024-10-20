// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Form = () => {
//     const [formData, setFormData] = useState({
//         nom: '',
//         prenom: '',
//         email: '',
//         demande: ''
//     });
//     const [message, setMessage] = useState(null);
//     const [csrfToken, setCsrfToken] = useState('');

//     // Regex
//     const regexNomPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const regexDemande = /^[\w\s,.!?-]{10,}$/; 

//     useEffect(() => {
//         const fetchCsrfToken = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/api/get-csrf-token');
//                 console.log("Token CSRF reçu :", response.data.csrfToken);
//                 setCsrfToken(response.data.csrfToken);
//             } catch (error) {
//                 console.error("Erreur lors de la récupération du token CSRF :", error);
//             }
//         };
    
//         fetchCsrfToken();
//     }, []);
    
    

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!regexNomPrenom.test(formData.nom)) {
//             setMessage('Le nom est invalide. Utilisez uniquement des lettres et des espaces.');
//             return;
//         }

//         if (!regexNomPrenom.test(formData.prenom)) {
//             setMessage('Le prénom est invalide. Utilisez uniquement des lettres et des espaces.');
//             return;
//         }

//         if (!regexEmail.test(formData.email)) {
//             setMessage('L\'adresse email est invalide.');
//             return;
//         }

//         if (!regexDemande.test(formData.demande)) {
//             setMessage('La demande doit contenir au moins 10 caractères.');
//             return;
//         }

//         // Envoi du formulaire si tout est valide
//         try {
//             const response = await axios.post('http://127.0.0.1:8000/api/submit-form', {
//                 ...formData,
//                 _csrf_token: csrfToken, // Ajout du token CSRF
//             }, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             if (response.status === 200) {
//                 setMessage('Votre demande a bien été envoyée.');
//             }
//         } catch (error) {
//             console.error("Erreur lors de l'envoi du formulaire :", error);
//             setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
//         }
//     };

//     return (
//         <div className="formPage">
//             <div className="form-container">
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="nom">Nom :</label>
//                     <input
//                         type="text"
//                         id="nom"
//                         name="nom"
//                         value={formData.nom}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="prenom">Prénom :</label>
//                     <input
//                         type="text"
//                         id="prenom"
//                         name="prenom"
//                         value={formData.prenom}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="email">Adresse e-mail :</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                     />

//                     <label htmlFor="demande">Demande :</label>
//                     <textarea
//                         id="demande"
//                         name="demande"
//                         rows="6"
//                         cols="40"
//                         value={formData.demande}
//                         onChange={handleChange}
//                         required
//                     ></textarea>

//                     <input type="submit" value="Envoyer" />
//                 </form>

//                 {message && <p>{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Form;


import React, { useState } from 'react';
import axios from 'axios';
// import useCsrfToken from '../../hooks/token';

const Form = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        demande: ''
    });
    const [message, setMessage] = useState(null);
    // const csrfToken = useCsrfToken(); 

    // Regex
    const regexNomPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexDemande = /^[\w\s,.!?-]{10,}$/; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!regexNomPrenom.test(formData.nom)) {
            setMessage('Le nom est invalide. Utilisez uniquement des lettres et des espaces.');
            return;
        }

        if (!regexNomPrenom.test(formData.prenom)) {
            setMessage('Le prénom est invalide. Utilisez uniquement des lettres et des espaces.');
            return;
        }

        if (!regexEmail.test(formData.email)) {
            setMessage('L\'adresse email est invalide.');
            return;
        }

        if (!regexDemande.test(formData.demande)) {
            setMessage('La demande doit contenir au moins 10 caractères.');
            return;
        }

        // Envoi du formulaire si tout est valide
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/submit-form', {
                ...formData,
                // _csrf_token: csrfToken,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setMessage('Votre demande a bien été envoyée.');
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
        }
    };

    return (
        <div className="formPage">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nom">Nom :</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="prenom">Prénom :</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Adresse e-mail :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="demande">Demande :</label>
                    <textarea
                        id="demande"
                        name="demande"
                        rows="6"
                        cols="40"
                        value={formData.demande}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <input type="submit" value="Envoyer" />
                </form>

                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Form;
