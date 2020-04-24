import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { Col, Image } from "react-bootstrap";
import { fetchClientDetails } from "../../actions";
import ProfileTabs from "../common/ProfileTabs";

const ClientProfile = ({
  location: { search },
  fetchClientData,
  client: { client: $client }
}) => {
  const [client, setClient] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(search);
    const id = params.get("id");
    fetchClientData(id);
  }, [search, fetchClientData]);

  useEffect(() => {
    setClient($client);
  }, [$client]);

  return (
    <div>
      {client ? (
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            height: "auto",
            minHeight: "200px",
            padding: "10px",
            backgroundColor: "#EFF6F7"
          }}
        >
          <div
            style={{
              float: "left",
              height: "400px",
              width: "20%",
              borderRadius: "3px",
              backgroundColor: "white"
            }}
          >
            <div
              style={{
                height: "50%",
                width: "100%",
                borderBottom: "1px solid gray"
              }}
            >
              <Col
                lg={9}
                md={2}
                style={{ paddingTop: "10px", paddingLeft: "75px" }}
              >
                <Image
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                  roundedCircle
                  fluid
                  thumbnail={true}
                />
              </Col>

              <h5 style={{ textAlign: "center", padding: "10px" }}>
                {client.firstname} {client.lastname}
              </h5>
              <p style={{ margin: 0, color: "gray", textAlign: "center" }}>
                {client.clientdetail.positionInCompany}
              </p>
              <p style={{ margin: 0, color: "gray", textAlign: "center" }}>
                {client.email}
              </p>
            </div>
            <div style={{ height: "50%", width: "100%" }}>
              <div
                style={{
                  width: "90%",
                  height: "50px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  borderBottom: "1px solid gray"
                }}
              >
                <div style={{ float: "left", textAlign: "left" }}>
                  <strong>
                    <p style={{ paddingTop: "15px" }}>ID</p>
                  </strong>
                </div>
                <div
                  style={{
                    float: "right",
                    textAlign: "right",
                    paddingTop: "15px"
                  }}
                >
                  <p>{client.id}</p>
                </div>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "50px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  borderBottom: "1px solid gray"
                }}
              >
                <div style={{ float: "left", textAlign: "left" }}>
                  <strong>
                    <p style={{ paddingTop: "15px" }}>Joined</p>
                  </strong>
                </div>
                <div
                  style={{
                    float: "right",
                    textAlign: "right",
                    paddingTop: "15px"
                  }}
                >
                  <p>{new Date(client.createdAt).toDateString()}</p>
                </div>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "50px",
                  marginLeft: "5%",
                  marginRight: "5%",
                  borderBottom: "1px solid gray"
                }}
              >
                <div style={{ float: "left", textAlign: "left" }}>
                  <strong>
                    <p style={{ paddingTop: "15px" }}>Status</p>
                  </strong>
                </div>
                <div
                  style={{
                    float: "right",
                    textAlign: "right",
                    paddingTop: "15px"
                  }}
                >
                  <p
                    style={
                      client.isActive ? { color: "#10BD2D" } : { color: "red" }
                    }
                  >
                    {client.isActive ? "Active" : "Not Active"}
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "90%",
                  height: "50px",
                  marginLeft: "5%",
                  marginRight: "5%"
                }}
              >
                <div style={{ float: "left", textAlign: "left" }}>
                  <strong>
                    <p style={{ paddingTop: "15px" }}>Phone</p>
                  </strong>
                </div>
                <div
                  style={{
                    float: "right",
                    textAlign: "right",
                    paddingTop: "15px"
                  }}
                >
                  <p>{client.clientdetail.phoneNo}</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Link
                to={`/company-dashboard?companyName=${client.clientdetail.companyName}&realmId=${client.oauth2tokens[0].realmId}&start_date=2015-12-01&end_date=2020-01-06`}
              >
                <input
                  style={{
                    height: "40px",
                    width: "100%",
                    backgroundColor: "#0A97A5",
                    color: "white",
                    border: "none",
                    borderRadius: "2px"
                  }}
                  type="button"
                  value="Go to company dashboard"
                />
              </Link>
            </div>
          </div>

          <div
            style={{
              float: "right",
              backgroundColor: "",
              height: "auto",
              width: "75%",
              overflow: "hidden",
              minHeight: "200px",
              borderRadius: "3px"
            }}
          >
            <div
              style={{ backgroundColor: "", height: "12.3%", width: "100%" }}
            >
              <ProfileTabs
                style={{ width: "100%" }}
                clientDetails={client.clientdetail}
              />
            </div>
            <div
              style={{ backgroundColor: "", height: "87.7%", width: "100%" }}
            ></div>
          </div>
        </div>
      ) : (
        <div style={{ margin: "auto", marginLeft: "49%", marginTop: "20%" }}>
          <Spinner animation="grow" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ client }) => {
  return { client };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchClientData: id => dispatch(fetchClientDetails(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientProfile);
