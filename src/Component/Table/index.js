import React, { useState } from "react";
import "./index.scss";

export const HomeTable = ({
  tabelLabel,
  tableValue,
  tableKeyBody,
  onClick
}) => {
  const handleClick = itemId => e => {
    onClick({ itemId: itemId });
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
                <div>
                  {tableKey === "amount"
                    ? Number(v[tableKey]).toLocaleString()
                    : v[tableKey]}
                </div>
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

const checkKey = (item, tableKey) => {
  if (tableKey === "status" && item[tableKey] === "UNPAID") {
    return <span className="badge badge-warning">{item[tableKey]}</span>;
  }

  if (tableKey === "status" && item[tableKey] === "PAID") {
    return <span className="badge badge-success">{item[tableKey]}</span>;
  }

  if (tableKey === "principal" || tableKey === "interestPayment") {
    return Number(item[tableKey]).toLocaleString();
  }

  return item[tableKey];
};

export const LoansTable = ({
  tabelLabel,
  tableValue,
  tableKeyBody,
  onClick
}) => {
  const [amount, setAmount] = useState(0);

  const handleClick = itemId => e => {
    onClick({ itemId: itemId, amount: amount });
  };

  const handleChangeAmount = value => {
    setAmount(value);
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
            Amount
          </th>
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
                <div>{checkKey(v, tableKey)}</div>
              </td>
            ))}
            <td>
              <InputAmount
                onChange={handleChangeAmount}
                isPaid={v.status === "PAID"}
              />
            </td>
            <td>
              <div>
                <button
                  disabled={v.status === "PAID"}
                  type="button"
                  className="btn btn-outline-success"
                  onClick={handleClick(v._id)}
                >
                  Repay
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const InputAmount = ({ onChange, isPaid }) => {
  const [amount, setAmount] = useState(0);

  function handleChangeAmount(e) {
    setAmount(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div>
      {isPaid ? (
        "PAID"
      ) : (
        <input type="number" value={amount} onChange={handleChangeAmount} />
      )}
    </div>
  );
};
