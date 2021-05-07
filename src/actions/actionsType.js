import { types } from "../types/types";

export const changeStatus = ( value ) => ({
    type: types.changeStatus,
    payload: value
});