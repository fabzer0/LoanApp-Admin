import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Spinner, Table } from "react-bootstrap";
import { fetchQuickbooksData } from "../actions";

const CompanyDashboard = ({
  location: { search },
  fetchQuickbooksData,
  quickbooks: { qboReports }
}) => {
  const [companyName, setCompanyName] = useState("");
  const [reports, setReports] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const realmId = params.get("realmId");
    const start_date = params.get("start_date");
    const end_date = params.get("end_date");
    fetchQuickbooksData(realmId, start_date, end_date);
  }, [fetchQuickbooksData, search]);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const company = params.get("companyName");
    setCompanyName(company);
  }, [search]);

  useEffect(() => {
    setReports(qboReports);
    setIsLoading(false);
  }, [qboReports]);

  const addZScoreComponents = (num1, num2, num3, num4, num5) => {
    const sum = +num1 + +num2 + +num3 + +num4 + +num5;
    return sum;
  };

  return (
    <div>
      <div>
        {!isLoading && reports ? (
          <div>
            <div style={{ marginTop: "10px" }}>
              <h4 style={{ textAlign: "center" }}>SCORE CARD</h4>
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "#00CCCC" }}>
                  <tr>
                    <th>{companyName}</th>
                    <th>Ratio Value</th>
                    <th>Weight</th>
                    <th>Z-Score Components</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EBIT/TOTAL ASSETS</td>
                    <td>{reports[1].zscore.ebitByTotalAssets.ratioValue}</td>
                    <td>{reports[1].zscore.ebitByTotalAssets.defaultWeight}</td>
                    <td>{reports[1].zscore.ebitByTotalAssets.weight}</td>
                  </tr>
                  <tr>
                    <td>NET SALES/TOTAL ASSETS</td>
                    <td>
                      {reports[1].zscore.netSalesByTotalAssets.ratioValue}
                    </td>
                    <td>
                      {reports[1].zscore.netSalesByTotalAssets.defaultWeight}
                    </td>
                    <td>{reports[1].zscore.netSalesByTotalAssets.weight}</td>
                  </tr>
                  <tr>
                    <td>BOOK VALUE EQUITY/TOTAL LIABILITIES</td>
                    <td>
                      {
                        reports[1].zscore.bookValueEquityByTotalLiabilities
                          .ratioValue
                      }
                    </td>
                    <td>
                      {
                        reports[1].zscore.bookValueEquityByTotalLiabilities
                          .defaultWeight
                      }
                    </td>
                    <td>
                      {
                        reports[1].zscore.bookValueEquityByTotalLiabilities
                          .weight
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>WORKING CAPITAL/TOTAL ASSETS</td>
                    <td>
                      {reports[1].zscore.workingCapitalByTotalAssets.ratioValue}
                    </td>
                    <td>
                      {
                        reports[1].zscore.workingCapitalByTotalAssets
                          .defaultWeight
                      }
                    </td>
                    <td>
                      {reports[1].zscore.workingCapitalByTotalAssets.weight}
                    </td>
                  </tr>
                  <tr>
                    <td>RETAINED EARNINGS/TOTAL ASSETS</td>
                    <td>
                      {
                        reports[1].zscore.retainedEarningsByTotalAssets
                          .ratioValue
                      }
                    </td>
                    <td>
                      {
                        reports[1].zscore.retainedEarningsByTotalAssets
                          .defaultWeight
                      }
                    </td>
                    <td>
                      {reports[1].zscore.retainedEarningsByTotalAssets.weight}
                    </td>
                  </tr>
                  <tr style={{ backgroundColor: "#00CCCC" }}>
                    <td colSpan="3">Z-Score</td>
                    <td>
                      {addZScoreComponents(
                        reports[1].zscore.ebitByTotalAssets.weight,
                        reports[1].zscore.netSalesByTotalAssets.weight,
                        reports[1].zscore.bookValueEquityByTotalLiabilities
                          .weight,
                        reports[1].zscore.workingCapitalByTotalAssets.weight,
                        reports[1].zscore.retainedEarningsByTotalAssets.weight
                      )}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div style={{ marginTop: "40px" }}>
              <h4 style={{ textAlign: "center" }}>QUICKBOOKS DATA</h4>
              <Table striped bordered hover>
                <thead style={{ backgroundColor: "orange" }}>
                  <tr>
                    <th>{companyName}</th>
                    <th>Values as at Jan, 2020 ($)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sales</td>
                    <td>{reports[1].sales}</td>
                  </tr>
                  <tr>
                    <td>EBIT</td>
                    <td>{reports[1].EBIT}</td>
                  </tr>
                  <tr>
                    <td>Total Assets</td>
                    <td>{reports[0].totalAssets}</td>
                  </tr>
                  <tr>
                    <td>Equity</td>
                    <td>{reports[0].equity}</td>
                  </tr>
                  <tr>
                    <td>Working Capital</td>
                    <td>{reports[0].workingCapital}</td>
                  </tr>
                  <tr>
                    <td>Retained Earnings</td>
                    <td>
                      {reports[0].retainedEarnings === ""
                        ? "0.0"
                        : reports[0].retainedEarnings}
                    </td>
                  </tr>
                  <tr>
                    <td>Total Liabilities</td>
                    <td>{reports[0].totalLiabilities}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        ) : (
          <div style={{ margin: "auto", marginLeft: "49%", marginTop: "20%" }}>
            <Spinner animation="grow" />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ quickbooks }) => {
  return {
    quickbooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuickbooksData: (realmId, start_date, end_date) =>
      dispatch(fetchQuickbooksData(realmId, start_date, end_date))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDashboard);
