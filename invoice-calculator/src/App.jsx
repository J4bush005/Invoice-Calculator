import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Footer from "./components/footer";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Dates from "./components/Dates";
import ClientDetails from "./components/clientDetails";
import MainDetails from "./components/mainDetails";
import Header from "./components/header";

function App() {
  const [showEstimate, setShowEstimate] = useState(false);
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showEstimate ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails />
            <ClientDetails />
            <Dates />
            <Table />
            <Notes />
            <Footer />

            <button onClick={() => setShowEstimate(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
          </div>
        ) : (
          <>
           <div className="flex flex-col justify-center">
           <input
              type="text"
              name="text"
              id="text"
              placeholder="Enter your name"
              autoComplete="Off"
            />
            <button onClick={() => setShowEstimate(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
              Preview Estimate
            </button>
           </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
