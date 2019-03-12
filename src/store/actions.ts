import { Car } from "../models";

export const ADD_CAR_DATA = 'ADD_CAR_DATA';
export const REMOVE_CAR_DATA = 'REMOVE_CAR_DATA';

// Add
export interface AddCarDataAction {
    type: typeof ADD_CAR_DATA,
    payload: Car
}

export const addCarData = (car: Car): AddCarDataAction => {
    return {
        type: ADD_CAR_DATA,
        payload: car
    };
};
//

// Update
export interface RemoveCarDataAction {
    type: typeof REMOVE_CAR_DATA;
    payload: Car
}

export const removeCarData = (car: Car): RemoveCarDataAction => {
    return {
        type: REMOVE_CAR_DATA,
        payload: car
    };
};
//

export type RootStateActionTypes = AddCarDataAction | RemoveCarDataAction;