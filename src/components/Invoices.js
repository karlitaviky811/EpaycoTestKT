import React from 'react';

export const Invoices = ({
    getName,
    facturas,
    handleClick,
}) => {

    const convertDate = ( d ) => {

        const date = new Date( d * 1000 ),
        month = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2),
        hours = ("0" + date.getHours()).slice(-2),
        minutes = ("0" + date.getMinutes()).slice(-2),
        seconds = ("0" + date.getSeconds()).slice(-2);
        return  date.getFullYear() +'-' + month + '-' + day + ' '+ hours + ':' + minutes + ':' +seconds;
    }

    const handleReturn = () => {
        window.location.href = '/';    
    }
    return (
        <div className="table-responsive">
            <button onClick={ handleReturn } className="btn btn-outline-info bOut"><i className="fas fa-chevron-left"></i></button>
            <table className="table table-bordered box-shadow--6dp borderless">
                <thead>
                    <tr>
                    <th>{ getName( 'amountFirst' ) }</th>
                    <th>{ getName( 'billId' ) }</th>
                    <th>{ getName( 'expirationDateFirst' ) }</th>
                    <th>Pagar</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas.bills.map((fact, index) => {
                        return (
                            <tr key={ index }>
                                <td>$ { Number( fact.amountFirst).toFixed( 3 ) } COP</td>
                                <td>{ fact.billId }</td>
                                <td>{ convertDate( fact.expirationDateFirst ) }</td>
                                <td>
                                    <button
                                        onClick={ () => handleClick( fact ) }
                                        className="btn btn-primary"
                                    >Pagar</button>
                                </td>
                            </tr>
                        );

                    })}
                    
                </tbody>
            </table>
        </div>
    );
}