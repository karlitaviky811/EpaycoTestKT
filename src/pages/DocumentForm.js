import React from 'react';
import axios from 'axios';

import { useForm } from '../hooks/userForm';
import './home.css';
export const DocumentForm = ( { history } ) => {

    const [ { document }, handleInputChange ] = useForm({
        document: '',
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Petición para loguear
        axios.post('https://apify.epayco.co/login/mail',
            {}, { auth: {username: 'pruebafront@payco.co', password: 'pruebafront$2020'}})
            .then(async function(res) {
                const header = {Authorization: `Bearer ${res.data.token}`}
                
                // Petición para obtener las configuraciones de un proyecto
                await axios.post('https://apify.epayco.co//billcollect/proyect/config/consult',
                    {projectId: 29},
                    {headers: header})
                        .then(res => {
                            console.log("response: ", res.data);
                            const { data } = res.data;
                            localStorage.setItem('configuration', JSON.stringify( data ));  
                        });
                        
                        // Petición para obtener las facturas de un documento

                        axios.post('https://apify.epayco.co//billcollect/invoices/consult',
                                {
                                    projectId: 29,
                                    document,
                                },
                                {headers: {Authorization: `Bearer ${res.data.token}`}})
                                    .then(res => {
                                        console.log("response: ", res.data);
                                        const { data } = res.data;
                                        localStorage.setItem('facturas', JSON.stringify( data ));
                                        
                                        history.push('/facturas');

                                    });
            });
    }

    return (
        <div className="container main">
            <h1 className="text-center">Page 1</h1>

            <form className="custom-form box-shadow--6dp" onSubmit={ handleSubmit }>

            <div class="p-2 mb-5 text-center">Consulte sus facturas</div>
                <div className="form-group">
                    <input
                        className="form-control input shadow-sm p-3 mb-5 bg-white rounded"
                        type="text"
                        name="document"
                        value={ document }
                        onChange={ handleInputChange }
                        placeholder="Document"
                    />   
                </div>
                <div className="form-group d-flex flex-row justify-content-center">
                    <button
                        className="btn btn-primary"
                    >Buscar Facturas</button>  
                </div>
            </form>
        </div>   
    );
}