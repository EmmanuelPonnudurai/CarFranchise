import * as React from 'react';
import { CarType } from '../models';

export interface AllCarsProps {
    inventory: Map<CarType, number>
}

export const AllCars = (props: AllCarsProps): JSX.Element => {
    const rows = () => {
        const items: JSX.Element[] = [];
        props.inventory.forEach((value, key) => {
            items.push(
                <tr key={key}>
                    <td>{CarType[key]}</td>
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