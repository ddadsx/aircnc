import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        //console.log(email)

        const response = await api.post('/sessions', { email }); // se a chave for diferente do valor, usar: email_a: email_b
        //console.log(response);

        const { _id } = response.data;

        localStorage.setItem('user', _id); //salva o user_id no storage do navegador

        //in JS: document.querySelector(input#email)
        // mas nao usamos pq o react é declarativo e
        // não imperativo

        // para navegar entre as rotas
        history.push('/dashboard');
    }

    return ( // a tag vazia <> é chamada de fragment. è como uma div mas nao aparece no html
        <>
            <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu melhor e-mail" 
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}