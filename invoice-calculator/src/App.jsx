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
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [estimateNumber, setEstimateNumber] = useState("");
  const [estimateDate, setEstimateDate] = useState("");
  const [notes, setNotes] = useState("");
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showEstimate ? (
          <div>
            <Header handlePrint={handlePrint} />
            <MainDetails name={name} address={address} />
            <ClientDetails />
            <Dates />
            <Table />
            <Notes />
            <Footer />

            <button
              onClick={() => setShowEstimate(false)}
              className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="name">Enter your name</label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="address">Enter your address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter your address"
                autoComplete="off"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => setShowEstimate(true)}
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
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
