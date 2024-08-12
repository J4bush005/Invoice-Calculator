import React from "react";

function footer() {
  return (
    <>
      {/* footer Items */}
      <footer>
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            <span className="font-bold">Your name:</span> Arkstone Flooring LLC
          </li>
          <li>
            <span className="font-bold">Your email:</span>{" "}
            JohnathonForbush@arkstoneflooring.com
          </li>
          <li>
            <span className="font-bold">Phone number:</span> 816-457-7697
          </li>
          <li>
            <span className="font-bold">website:</span> www.arkstoneflooring.com
          </li>
        </ul>
      </footer>
      {/* End of footer Items */}
    </>
  );
}

export default footer;
