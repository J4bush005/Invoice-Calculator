import React from "react";

function header({ handlePrint }) {
  return (
    <div>
      {" "}
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
            Estimate
          </h1>
        </div>

        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li>
              <button className="btn btn-print" onClick={handlePrint}>
                Print
              </button>
            </li>
            <li>
              <button className="btn btn-download">Download</button>
            </li>
            <li>
              <button className="btn btn-send">Send</button>
            </li>
          </ul>
        </div>
      </header>
      {/* End of Header */}
    </div>
  );
}

export default header;
