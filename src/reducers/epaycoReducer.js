import { types } from "../types/types";

const initialValues = {
    showModal: true,
    facturas: [],
    config: [],
};

export const EpaycoReducer = ( state = initialValues, action ) => {

    switch ( action.type ) {
        case types.changeStatus:
            
            return ({
                ...state,
                showModal: action.payload
            });

        break;
    
        default:
            return state;
    }

}