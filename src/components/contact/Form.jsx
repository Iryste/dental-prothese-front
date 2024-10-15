import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        demande: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Gérer l'envoi du formulaire ici
    };

    return (
        <div className="formPage">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />

                    <label htmlFor="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />

                    <label htmlFor="email">Adresse e-mail :</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label htmlFor="demande">Demande :</label>
                    <textarea id="demande" name="demande" rows="6" cols="40" value={formData.demande} onChange={handleChange} required></textarea>

                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    );
};

export default Form;
