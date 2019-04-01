import { RootStateActionTypes } from './actions';
import { RootState, CarType } from '../models';

export const initState: RootState = {
    inventory: new Map<CarType, number>([
        [CarType.Mars, 3],
        [CarType.Mercury, 5],
        [CarType.Saturn, 2]
    ])
};

export const rootReducer = (state = initState,
    action: RootStateActionTypes): RootState => {
    switch (action.type) {
        case "ADD_CAR_DATA":
            return state;

        case "REMOVE_CAR_DATA":
            const updated = new Map<CarType, number>();
            state.inventory.forEach((x, y) => {
                if (action.payload.type === y && x !== 0) {
                    const count = x - 1;
                    if (count !== 0) {
                        updated.set(y, count);
                    }
                }
                else {
                    updated.set(y, x)
                }
            });
            return {
                inventory: updated
            };

        default:
            return state;
    }
}