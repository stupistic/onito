import "./Table.css";

export const Table = ({ tabledata }) => {
  return (
    <>
      <div className="tablediv">
        <table className="table1">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Mode of Payment</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {tabledata.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.Date}</td>
                  <td>Rs {data.Amount}</td>
                  <td>{data.Payment_Mode}</td>
                  <td>{data.Remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
