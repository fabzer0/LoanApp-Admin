import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));

export default function FullWidthTabs({ clientDetails }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Company" {...a11yProps(0)} />
          <Tab label="Settings" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Company Name
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.companyName}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Respondent
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.respondent}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Country
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.country}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Date Of Incorporation
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.dateOfIncorporation}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Legal Form
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.legalForm}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Industry
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.industry}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>C.E.O</p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.ceo}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    C.E.O Country of Birth
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.ceoCountryOfBirth}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    C.E.O Date of Birth
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.ceoDateOfBirth}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Last year turnover
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.lastYearTurnOver}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Last month turnover
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.lastMonthTurnOver}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Company activities
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.companyActivities}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    FTE Count
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.fteCount}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Debt funding required
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.debtFundingRequired}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Desired use of debt proceeds
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.desiredUseOfDebtProceeds}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Proposed guarantees
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.proposedGuarantees}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Product
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.product}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Existing lenders
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.existingLenders}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Number of lenders
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.noOfLenders}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Name of accounting system
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.nameOfAccountingSystem}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Online Accounting
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.onlineAccounting}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Accountant phone number
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.accountantPhoneNo}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Name of accountant
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.nameOfAccountant}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Accountant source
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.externalOrInternalAccountant}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Bank with most Deposit
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {clientDetails.mostDepositBank}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Date created
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {new Date(clientDetails.createdAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto" }}>
            <div
              style={{
                width: "100%",
                height: "30px",
                borderBottom: "1px solid gray"
              }}
            >
              <div style={{ float: "left" }}>
                <strong>
                  <p style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                    Date updated
                  </p>
                </strong>
              </div>
              <div style={{ float: "right" }}>
                <p style={{ paddingRight: "5px", paddingTop: "5px" }}>
                  {new Date(clientDetails.updatedAt).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Settings
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
