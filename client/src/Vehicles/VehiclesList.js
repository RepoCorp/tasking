import React from "react";
import { List, Segment, Dimmer, Loader } from "semantic-ui-react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const VEHICLES_QUERY = gql`
  query Vehicles {
    vehicles {
      plate
      procedures {
        procedureType {
          name
        }
        dueDate
      }
    }
  }
`;

function VehiclesList() {
  return (
    <Query query={VEHICLES_QUERY}>
      {({ loading, error, data }) => {
        if (loading)
          return (
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>
            </Segment>
          );
        if (error) return <p>Error</p>;
        const { vehicles } = data;

        return (
          <List>
            {vehicles.map(vehicle => (
              <List.Item>
                {vehicle.plate}
                {vehicle.procedures.map(procedure => (
                  <List.Item>
                    {procedure.procedureType.name} {procedure.dueDate}{" "}
                  </List.Item>
                ))}
              </List.Item>
            ))}
          </List>
        );
      }}
    </Query>
  );
}

export default VehiclesList;
