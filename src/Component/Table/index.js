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
                <div>
                  {tableKey === "status" ? (
                    v[tableKey] === "UNPAID" ? (
                      <span className="badge badge-warning">{v[tableKey]}</span>
                    ) : (
                      <span className="badge badge-success">{v[tableKey]}</span>
                    )
                  ) : (
                    v[tableKey]
                  )}
                </div>
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
