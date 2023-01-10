// reuse all by using useRef instead of querySelector

import { useState } from "react";
import "./App.scss";
interface IFormData {
  type: string;
  toFrom: string;
  details: string;
  amount: string;
}
const App = () => {
  const [typeInput, setTypeInput] = useState<string>("");
  const [toFromInput, setToFromInput] = useState<string>("");
  const [detailsInput, setDetailsInput] = useState<string>("");
  const [amountInput, setAmountInput] = useState<string>("");
  const [formData, setFormData] = useState<IFormData[]>([
    {
      type: "",
      toFrom: "",
      details: "",
      amount: "",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormData([
      ...formData,
      {
        type: typeInput,
        toFrom: toFromInput,
        details: detailsInput,
        amount: amountInput,
      },
    ]);

    console.log(formData);
  };

  const grabTypeInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeInput(e.target.value);
  };

  const grabToFromInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToFromInput(e.target.value);
  };

  const grabDetailsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailsInput(e.target.value);
  };

  const grabAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountInput(e.target.value);
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="type">Type:</label>
          <select id="type" name="inputType" onChange={grabTypeInput}>
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="tofrom">To / From:</label>
          <input
            type="text"
            id="tofrom"
            value={toFromInput}
            onChange={grabToFromInput}
          />
        </div>
        <div className="field">
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            value={detailsInput}
            id="details"
            onChange={grabDetailsInput}
          />
        </div>
        <div className="field">
          <label htmlFor="amount">Amount (£):</label>
          <input
            type="number"
            value={amountInput}
            id="amount"
            onChange={grabAmountInput}
          />
        </div>
        <button type="submit">Add</button>
      </form>

      <ul>
        {formData.length > 0 &&
          formData.map(
            (data, index) =>
              data.toFrom !== "" &&
              data.amount !== "" &&
              data.details !== "" && (
                <li key={index + 1}>
                  {`${data.toFrom} is owed £${data.amount} for ${data.details}`}
                </li>
              )
          )}
      </ul>
    </>
  );
};

export default App;
