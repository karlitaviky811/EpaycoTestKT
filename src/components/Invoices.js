import React from 'react';

export const Invoices = ({
    getName,
    facturas,
    handleClick,
}) => {

    const convertDate = ( date ) => {
        const newDate = new Date( date * 1000 );
        console.log( newDate );
        return newDate.getDate() - 1 + '-' + newDate.getMonth() +  '-' + newDate.getFullYear();
    }

    return (
        <div className="table-responsive">
            <button class="btn btn-outline-info bOut"><i className="fas fa-chevron-left"></i></button>
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