import React from "react";
import { Header } from "semantic-ui-react";
import { Route } from "react-router-dom";
import VehiclesList from "./VehiclesList";
// import VehicleInfo from "./VehicleInfo";

function Vehicles() {
  return (
    <div>
      <Header as="h1">Información Vehículos</Header>
      <Route exact path="/vehiculos" component={VehiclesList} />
      {/*<Route path="/vehiculos/:id" component={VehicleInfo} />*/}

      <p>Aquí está la información del vehículo</p>
      <p>Y en algún momento las alarmas</p>
    </div>
  );
}

export default Vehicles;
