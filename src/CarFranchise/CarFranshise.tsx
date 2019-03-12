import * as React from 'react';
import '../styles.css';
import { Car, CarType } from '../models';

export interface CarFranshiseProps {
    franchiseName: string;
    cars: Car[];
    onCarSold: (car: Car) => void;
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
        const t = parseInt(event.target.value, 10) as CarType;
        this.setState({
            carType: t as CarType
        });
    };

    private onTextChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const v = event.target.value;
    };

    private onClickHandler = () => {
        const car: Car = {
            make: 'Super Car',
            type: this.state.carType
        };
        this.props.onCarSold(car);
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
        return (
            <div className={this.getClassName()}>
                <label className="space-well">{this.props.franchiseName + ' frachise'}</label>
                <label className="space-well">Total Cars in godown: {this.props.cars.length}</label>
                <div className="space-well">
                    <label>Car Type </label>
                    <select value={this.state.carType} onChange={this.handleChange}>
                        {Array.from(new Set(this.props.cars.map(m => m.type))).map(type => {
                            return (<option key={type} value={type}>{CarType[type]}</option>);
                        })}
                    </select>
                </div>
                <div>
                    <input type='button' value='Order' onClick={this.onClickHandler} />
                </div>
                <br />
            </div>
        );
    }
}