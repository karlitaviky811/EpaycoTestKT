import React from 'react';
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

    const configs = JSON.parse(localStorage.getItem('configuration'));


    const getName = (key) => {

        let value = configs.find((item) => item.key === key);

        if (value === undefined) {
            return null;
        }

        return value.name;

    }

    const convertDate = (d) => {

        const date = new Date(d * 1000),
            month = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2),
            hours = ("0" + date.getHours()).slice(-2),
            minutes = ("0" + date.getMinutes()).slice(-2),
            seconds = ("0" + date.getSeconds()).slice(-2);
        return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    }

    return (
        <form className="detail">
            <div className="modal-body card-4">
                <div className="row ">
                    <div className="col-3">
                        <button
                            onClick={handleShowModal}
                            className="btn btn-outline-info bOut"
                        ><i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <strong>{getName('billId')} {billId}</strong>  
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2">Descripción</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('additionalFirst')}</strong></div>
                        <div className="p-2">{additionalFirst}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('expirationDateFirst')}</strong></div>
                        <div className="p-2">{convertDate(expirationDateFirst)}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('billDate')}</strong></div>
                        <div className="p-2">{billDate}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('document')}</strong></div>
                        <div className="p-2">{document}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('billId')}</strong></div>
                        <div className="p-2">{billId}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('descriptionFirst')}</strong></div>
                        <div className="p-2">{descriptionFirst}</div>
                    </div>
                </div>

                <div className="d-flex flex-column  borderCustom">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2"><strong>{getName('amountFirst')}</strong></div>
                        <div className="p-2">$ {amountFirst} COP </div>
                    </div>
                </div>
                <div className="d-flex flex-column mt-3">
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn btn-outline-info mr-3">Cancelar</button>
                        <button className="btn btn-outline-info">Pagar</button>
                    </div>
                </div>
            </div>



        </form>
    )
}
