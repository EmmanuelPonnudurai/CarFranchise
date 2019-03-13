import { connect } from "react-redux";
import { RootState, CarType } from "../models";
import { AllCars } from "./allCars";

interface PropsFromStore {
    inventory: Map<CarType, number>
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
    return {
        inventory: appState.inventory
    };
}

const ConnectedAllCars = connect<PropsFromStore, {}, {}, RootState>(mapStateToProps)(AllCars);
export default ConnectedAllCars;