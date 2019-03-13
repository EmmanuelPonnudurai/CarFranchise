import { RootState, CarType, CarRequest } from "../models";
import { Dispatch } from "redux";
import { RemoveCarDataAction, removeCarData } from "../store/actions";
import { connect } from "react-redux";
import { CarFranchise } from "./CarFranshise";

interface DispatchFromProps {
    onCarSold: (carRequest: CarRequest) => void;
}

interface PropsFromStore {
    inventory: Map<CarType, number>;
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
    return {
        inventory: appState.inventory
    };
};

const mapDispatchToProps = (dispatch: Dispatch<RemoveCarDataAction>): DispatchFromProps => {
    const dispatcher: DispatchFromProps = {
        onCarSold: (carRequest: CarRequest) => dispatch(removeCarData(carRequest))
    };
    return dispatcher;
}

export const ConnectedCarFranchise =
    connect<PropsFromStore, DispatchFromProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(CarFranchise);