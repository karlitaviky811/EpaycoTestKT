import React from 'react';
import axios from 'axios';
import { useForm } from '../hooks/userForm';
import './home.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DocumentForm = ({ history }) => {

    const [{ document }, handleInputChange] = useForm({
        document: '',
    });

    const doc = document;
    toast.configure()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (document) {
            // Petición para loguear
            axios.post('https://apify.epayco.co/login/mail',
                {}, { auth: { username: 'pruebafront@payco.co', password: 'pruebafront$2020' } })
                .then(async function (res) {
                    const header = { Authorization: `Bearer ${res.data.token}` }
                    toast('Consultando ...', { autoClose: 1000 })


                    // Petición para obtener las configuraciones de un proyecto
                    await axios.post('https://apify.epayco.co//billcollect/proyect/config/consult',
                        { projectId: 29 },
                        { headers: header })
                        .then(res => {
                            const { data } = res.data;
                            localStorage.setItem('configuration', JSON.stringify(data));
                        });

                    // Petición para obtener las facturas de un documento

                    await axios.post('https://apify.epayco.co//billcollect/invoices/consult',
                        {
                            projectId: 29,
                            document,
                        },
                        { headers: { Authorization: `Bearer ${res.data.token}` } })
                        .then(res => {

                            if (res.data.data.bills.length > 0) {
                                const { data } = res.data;
                                localStorage.setItem('facturas', JSON.stringify(data));

                                history.push('/facturas');


                            } else {

                                toast.warning('Este documento' + ' " ' + document + ' "' + ' : ' + 'no tiene facturas asociadas', { position: toast.POSITION.TOP_CENTER })


                            }

                        });
                });
        } else {

            toast.error('¡El campo documento es obligatorio!', { position: toast.POSITION.TOP_CENTER })
        }

    }

    return (
        <div className="container main marginTable">
            <form className="custom-form box-shadow--6dp marginTable" onSubmit={handleSubmit}>
                <div className="form-group d-flex flex-row justify-content-center">
                    <img src="data:image/png;base64,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" width='180px' heigth='100px' />
                </div>

                <div className="p-2 mb-5 text-center">Consulte sus facturas</div>
                <div className="form-group">
                    <input
                        className="form-control shadow-sm p-3 mb-5 bg-white rounded"
                        type="text"
                        name="document"
                        value={doc}
                        onChange={handleInputChange}
                        placeholder="Documento"
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