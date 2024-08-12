import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/footer";
import Notes from "./components/notes";
import Table from "./components/table";
import Dates from "./components/dates";
import ClientDetails from "./components/clientDetails";
import MainDetails from "./components/mainDetails";
import Header from "./components/header";

function App() {
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        <Header />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
      </main>
    </>
  );
}

export default App;
