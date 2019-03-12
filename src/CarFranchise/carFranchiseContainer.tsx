import { Car, RootState } from "../models";
import { Dispatch } from "redux";
import { RemoveCarDataAction, removeCarData } from "../store/actions";
import { connect } from "react-redux";
import { CarFranchise } from "./CarFranshise";

interface DispatchFromProps {
    onCarSold: (car: Car) => void;
}

interface PropsFromStore {
    cars: Car[];
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
    return {
        cars: appState.cars
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RemoveCarDataAction>): DispatchFromProps => {
    const dispatcher: DispatchFromProps = {
        onCarSold: (car: Car) => dispatch(removeCarData(car))
    };
    return dispatcher;
}

export const ConnectedCarFranchise =
    connect<PropsFromStore, DispatchFromProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(CarFranchise);