import { connect } from "react-redux";
import { RootState, Car } from "../models";
import { AllCars } from "./allCars";

interface PropsFromStore {
    cars: Car[]
}

const mapStateToProps = (appState: RootState): PropsFromStore => {
    return { cars: appState.cars };
}

const ConnectedAllCars = connect<PropsFromStore, {}, {}, RootState>(mapStateToProps)(AllCars);
export default ConnectedAllCars;