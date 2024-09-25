import React from 'react';

const Form = () => {
    return (
        <div className='form-container'>
            <form action="/submit" method="post">
                <label htmlFor="nom">Nom :</label><br />
                <input type="text" id="nom" name="nom" required /><br /><br />

                <label htmlFor="prenom">Prénom :</label><br />
                <input type="text" id="prenom" name="prenom" required /><br /><br />

                <label htmlFor="email">Adresse e-mail :</label><br />
                <input type="email" id="email" name="email" required /><br /><br />

                <label htmlFor="demande">Demande :</label><br />
                <textarea id="demande" name="demande" rows="6" cols="40" required></textarea><br /><br />

                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default Form;
