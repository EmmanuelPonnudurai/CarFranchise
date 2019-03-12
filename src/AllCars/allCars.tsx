import * as React from 'react';
import { Car, CarType } from '../models';

export interface AllCarsProps {
    cars: Car[]
}

export const AllCars = (props: AllCarsProps): JSX.Element => {
    const carMap = new Map<string, number>();
    for (const type in CarType) {
        const i = parseInt(type, 10);
        if (!isNaN(i)) {
            carMap.set(CarType[i], ((props.cars.filter(x => x.type === i) || []).length));
        }
    }

    const rows = () => {
        const items: JSX.Element[] = [];
        carMap.forEach((value, key) => {
            items.push(
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>);
        });
        return items;
    };

    return (
        <div className="franchise blueviolet">
            <p>The main Godown</p>
            <table>
                <thead>
                    <tr>
                        <th> Car Type</th>
                        <th> Remaining Count</th>
                    </tr>
                </thead>
                <tbody>
                    {rows()}
                </tbody>
            </table>
        </div>
    );
}