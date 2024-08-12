import React from "react";

function dates() {
  return (
    <div>
      {" "}
      {/* Invoice Details */}
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li>
            <span className="font-bold">Estimate Number</span>
          </li>
          <li>
            <span className="font-bold">Estimate Date</span>
          </li>
          <li>
            <span className="font-bold">Due Date</span>
          </li>
        </ul>
      </article>
      {/* End of Invoice Details */}
    </div>
  );
}

export default dates;
