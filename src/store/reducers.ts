import { RootStateActionTypes } from './actions';
import { RootState, Car, CarType } from '../models';

const initState: RootState = {
    cars: [
        { make: 'Super Car', type: CarType.Mars },
        { make: 'Super Car', type: CarType.Mars },
        { make: 'Super Car', type: CarType.Mercury },
        { make: 'Super Car', type: CarType.Mercury },
        { make: 'Super Car', type: CarType.Saturn },
        { make: 'Super Car', type: CarType.Saturn },
        { make: 'Super Car', type: CarType.Saturn },
        { make: 'Super Car', type: CarType.Saturn }
    ]
};

export const rootReducer = (state = initState,
    action: RootStateActionTypes): RootState => {
    switch (action.type) {
        case "ADD_CAR_DATA":
            return state;
        case "REMOVE_CAR_DATA":
            const currentCars = state.cars ? state.cars : [];
            const updatedCars: Car[] = [];
            let found = false;
            for (const car of currentCars) {
                if (!found && (car.type === action.payload.type)) {
                    found = true;
                }
                else {
                    updatedCars.push(car);
                }
            }
            return {
                ...state,
                cars: updatedCars
            };
        default:
            return state;
    }
}