import React from "react";

function mainDetails({name, address}) {
  return (
    <div>
      {" "}
      {/* My Info */}
      <section className="flex flex-col items-end justify-end">
        <h2 className="text-xl uppercase">Johnathon Forbush</h2>
        <p>Address</p>
      </section>
      {/* End of My Info */}
    </div>
  );
}

export default mainDetails;
