import "./form.css";

export const Form = ({ handlechange, formInput, handlesubmit }) => {
  return (
    <>
      <div className="container">
        <div className="login">
          <h2>Receipt Details</h2>
          <form className="details">
            <div className="form">
              <label className="label">
                Date<sup style={{ color: "red" }}>*</sup> :{" "}
              </label>
              <input
                type="date"
                onChange={handlechange}
                value={formInput.Date}
                className="right"
                placeholder="Enter Date"
                name="Date"
              />
            </div>
            <div className="form">
              <label className="label">
                Amount<sup style={{ color: "red" }}>*</sup> :{" "}
              </label>
              <input
                onChange={handlechange}
                value={formInput.Amount}
                className="right"
                placeholder="Enter Amount (in INR)"
                name="Amount"
              />
            </div>
            <div className="form">
              <label className="label">
                Payment Mode<sup style={{ color: "red" }}>*</sup> :{" "}
              </label>
              <select
                onChange={handlechange}
                value={formInput.Payment_Mode}
                className="sus"
                name="Payment_Mode"
              >
                <option>Choose Option</option>
                <option>Cash</option>
                <option>Credit/Debit Card</option>
                <option>Net Banking</option>
                <option>UPI</option>
              </select>
            </div>
            <div className="form">
              <label className="label">Remark : </label>
              <input
                onChange={handlechange}
                value={formInput.Remark}
                className="right"
                placeholder="Enter Remark"
                name="Remark"
                required
              />
            </div>
            <div className="buttons">
              <input
                onClick={(document.getElementsByClassName("right").value = "")}
                type="reset"
                className="delete"
                value="CANCEL (Esc)"
              />
              <input
                className="submit"
                onClick={handlesubmit}
                type="submit"
                value="SUBMIT"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
