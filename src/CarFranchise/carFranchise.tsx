import * as React from 'react';
import '../styles.css';
import { CarType, CarRequest } from '../models';

export interface CarFranshiseProps {
    franchiseName: string;
    inventory: Map<CarType, number>;
    onCarSold: (carRequest: CarRequest) => void;
}

interface CarFranchiseState {
    carType: CarType;
}

export class CarFranchise extends React.Component<CarFranshiseProps, CarFranchiseState>{
    constructor(props: CarFranshiseProps) {
        super(props);
        this.state = { carType: CarType.Mars };
    }

    private handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const carType = parseInt(event.target.value, 10) as CarType;
        this.setState({
            carType: carType
        });
    }

    private onClickHandler = () => {
        const carRequest: CarRequest = {
            type: this.state.carType,
            count: 1
        };
        this.props.onCarSold(carRequest);
    };

    private getClassName = () => {
        let className = 'green';
        switch (this.props.franchiseName) {
            case 'Chicago':
                className = 'green';
                break;
            case 'New Jersey':
                className = 'blue';
                break;
            case 'New York':
                className = 'carol';
                break;
        }
        return 'franchise' + ' ' + className;
    };

    render() {
        let totalCarCount = 0;
        this.props.inventory.forEach((x, y) => totalCarCount = totalCarCount + x);
        const carTypes = Array.from(this.props.inventory.keys());

        return (
            <div className={this.getClassName()}>
                <label className="space-well">{this.props.franchiseName + ' frachise'}</label>
                <label className="space-well">Total Cars in plant: {totalCarCount}</label>
                <div className="space-well">
                    <label>Car Type </label>
                    <select value={this.state.carType} onChange={this.handleChange}>
                        {carTypes.map(type => {
                            return (<option key={type} value={type}>{CarType[type]}</option>);
                        })}
                    </select>
                </div>
                <div>
                    <input type='button' value='Sell' onClick={this.onClickHandler} />
                </div>
                <br />
            </div>
        );
    }
}