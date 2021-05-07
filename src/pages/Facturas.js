import React, { useEffect, useState } from 'react';
import './table.css';
import {Modal} from '../components/Modal';
import { Invoices } from '../components/Invoices';

export const Facturas = () => {

    const configs = JSON.parse( localStorage.getItem('configuration') );
    const facturas = JSON.parse( localStorage.getItem('facturas') );
    const [ showModal, setShowModal] = useState( false );
    const [ facturaNew, setFactura ] = useState({});

    useEffect(() => {

        if ( facturas.bills.length < 2 ) {
            setShowModal( !showModal );
            setFactura( facturas.bills[0] );
        }

    },[]);

    const getName = ( key ) => {
        let value = configs.find((item) => item.key === key);
        
        if ( value === undefined ) {
            return null;
        }

        return value.name;
    }

    const handleShowModal = () => {

        setShowModal( !showModal );
    }

    const handleClick = ( fact ) => {
        
        setShowModal( !showModal );

        setFactura( Object.assign({}, fact) );
    }

    return (
        <div className="container marginTable">
            
          

            {
                showModal
                ?
                (    
                    <Modal
                        { ...facturaNew }
                        handleShowModal={handleShowModal}
                    />
                )
                :
                (
                    <Invoices
                        getName={ getName }
                        facturas={ facturas }
                        handleClick={ handleClick }
                    />
                ) 
            }
        </div>
    );
}