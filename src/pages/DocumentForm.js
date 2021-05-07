import React from 'react';
import axios from 'axios';
import { useForm } from '../hooks/userForm';
import './home.css';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
    
export const DocumentForm = ( { history } ) => {

    const [ { document }, handleInputChange ] = useForm({
        document: '',
    });
    
    const doc = document;
    toast.configure()
    const handleSubmit = ( e ) => {
        e.preventDefault();
        if(document){
                        // Petición para loguear
        axios.post('https://apify.epayco.co/login/mail',
        {}, { auth: {username: 'pruebafront@payco.co', password: 'pruebafront$2020'}})
        .then(async function(res) {
            const header = {Authorization: `Bearer ${res.data.token}`}
            toast('Consultando ...',{autoClose:1000})
                  
           
            // Petición para obtener las configuraciones de un proyecto
            await axios.post('https://apify.epayco.co//billcollect/proyect/config/consult',
                {projectId: 29},
                {headers: header})
                    .then(res => {
                        const { data } = res.data;
                        localStorage.setItem('configuration', JSON.stringify( data ));  
                    });
                    
                    // Petición para obtener las facturas de un documento

             await       axios.post('https://apify.epayco.co//billcollect/invoices/consult',
                            {
                                projectId: 29,
                                document,
                            },
                            {headers: {Authorization: `Bearer ${res.data.token}`}})
                                .then(res => {
                                   
                                    if(res.data.data.bills.length > 0){
                                        const { data } = res.data;
                                        localStorage.setItem('facturas', JSON.stringify( data ));
                                    
                                        history.push('/facturas');
                                      

                                    }else{
                                       
                                        toast.warning('Este documento'+ ' " '+ document +' "' + ' : ' + 'no tiene facturas asociadas',{position: toast.POSITION.TOP_CENTER})
                                       
                                        
                                    }
                                    
                                });
        });
        }else{

            toast.error('¡El campo documento es obligatorio!',{position: toast.POSITION.TOP_CENTER})
        }

    }

    return (
        <div className="container main">
           

            <form className="custom-form box-shadow--6dp marginTable" onSubmit={ handleSubmit }>

            <div className="p-2 mb-5 text-center">Consulte sus facturas</div>
                <div className="form-group">
                    <input
                        className="form-control shadow-sm p-3 mb-5 bg-white rounded"
                        type="text"
                        name="document"
                        value={ doc }
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