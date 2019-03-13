export interface RootState {
    inventory: Map<CarType, number>
}

export interface Car {
    make: string;
    type: CarType;
}

export enum CarType {
    Mercury = 1,
    Mars = 2,
    Saturn = 3
}

export interface Franchise {
    id: number;
    location: string;
}

export interface CarRequest {
    type: CarType;
    count: number
}