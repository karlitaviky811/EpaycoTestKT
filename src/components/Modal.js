import React, { useEffect, useState } from 'react';
import '../pages/table.css';

export const Modal = ({
    billDate,
    amountFirst,
    additionalFirst,
    document,
    billId,
    descriptionFirst,
    expirationDateFirst,
    handleShowModal,
}) => {

    const [coords, setcoords] = useState({x:0, y:0})
    const {x, y}=coords;
    const configs = JSON.parse( localStorage.getItem('configuration') );


    const getName = ( key ) => {

        let value = configs.find((item) => item.key === key);
        
        if ( value === undefined ) {
            return null;
        }

        return value.name;

    }

    return (
        <form class="detail">
            <div class="modal-body card-4">
            <div class="row ">
            <div class="col-3">
            <button
                onClick={ handleShowModal }
                class="btn btn-outline-info bOut"
            ><i className="fas fa-chevron-left"></i>
            </button>
            </div>
            <div class="col-6 d-flex justify-content-center">
            { getName( 'billId' ) } { billId }
            </div>
        </div>
        <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between">
                <div class="p-2">Descripción</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'additionalFirst' ) }</strong></div>
                <div class="p-2">{ additionalFirst }</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'expirationDateFirst' ) }</strong></div>
                <div class="p-2">{ expirationDateFirst }</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'billDate' ) }</strong></div>
                <div class="p-2">{ billDate }</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'document') }</strong></div>
                <div class="p-2">{ document }</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'billId' ) }</strong></div>
                <div class="p-2">{ billId }</div>
                </div>
            </div>

            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'descriptionFirst' )}</strong></div>
                <div class="p-2">{ descriptionFirst }</div>
                </div>
            </div>
            
            <div class="d-flex flex-column  borderCustom">
                <div class="d-flex flex-row justify-content-between">
                <div class="p-2"><strong>{ getName( 'amountFirst' )}</strong></div>
                <div class="p-2">$ { amountFirst } COP </div>
                </div>
            </div>
            <div class="d-flex flex-column mt-3">
                <div class="d-flex flex-row justify-content-end">
                <button class="btn btn-outline-info mr-3">Cancelar</button>
             <button class="btn btn-outline-info">Pagar</button>
                </div>
            </div>
            </div>


                
        </form>
    )
}
