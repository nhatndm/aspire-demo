import React from "react";
import "./index.scss";

export const HomeTable = ({
  tabelLabel,
  tableValue,
  tableKeyBody,
  onClick
}) => {
  const handleClick = itemId => e => {
    onClick(itemId);
  };

  return (
    <table className="table tablecom table-hover">
      <thead>
        <tr>
          <th className="text-center" scope="col">
            #
          </th>
          {tabelLabel.map((v, i) => (
            <th className="text-center" key={`head-${i}`} scope="col">
              {v}
            </th>
          ))}
          <th className="text-center" scope="col">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {tableValue.map((v, i) => (
          <tr key={`body-${i}`}>
            <th className="row">
              <div>{i + 1}</div>
            </th>
            {tableKeyBody.map((tableKey, i) => (
              <td key={`body-row-${i}`}>
                <div>{v[tableKey]}</div>
              </td>
            ))}
            <td>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={handleClick(v._id)}
                >
                  View
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const LoansTable = ({ tabelLabel, tableValue, tableKeyBody }) => {
  return (
    <table className="table tablecom table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          {tabelLabel.map((v, i) => (
            <th key={`head-${i}`} scope="col">
              {v}
            </th>
          ))}
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableValue.map((v, i) => (
          <tr key={`body-${i}`}>
            <th className="row">{i + 1}</th>
            {tableKeyBody.map((tableKey, i) => (
              <td key={`body-row-${i}`}>{v[tableKey]}</td>
            ))}
            <td>
              <input />
            </td>
            <td>
              <button>Click</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
