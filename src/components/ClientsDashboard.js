import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { fetchClients } from "../actions";

const ClientDashboard = ({ clients: { clients: $clients }, fetchClients }) => {
  const [clients, setClients] = useState(null);
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  useEffect(() => {
    setClients($clients);
  }, [$clients]);

  return (
    <div style={{ paddingLeft: "0px", width: "100%" }}>
      {clients
        ? clients.map(client => (
            <div
              key={client.id}
              style={{
                display: "inline-block",
                margin: "auto",
                paddingLeft: "0.51px",
                paddingBottom: "15px",
                paddingRight: "10px"
              }}
            >
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>
                      {client.firstname} {client.lastname}
                    </Card.Header>
                    <Card.Meta>{client.email}</Card.Meta>
                    <Card.Description>
                      Account created on{" "}
                      <strong>
                        {new Date(client.createdAt).toUTCString()}
                      </strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div>
                      <Link to={`client-profile?id=${client.id}`}>
                        <Button basic color="green">
                          Go to Profile
                        </Button>
                      </Link>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = ({ clients }) => {
  return {
    clients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClients: () => dispatch(fetchClients())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDashboard);
