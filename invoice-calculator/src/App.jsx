import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <main>
        {/* Header */}
        <header>
          <div>
            <h2>Invoice</h2>
          </div>

          <div>
            <ul>
              <li>Print</li>
              <li>Download</li>
              <li>Send</li>
            </ul>
          </div>
        </header>
        {/* End of Header */}

        {/* My Info */}
        <section>
          <h2>Johnathon Forbush</h2>
          <p>Address</p>
        </section>
        {/* End of My Info */}

        {/* Client Info */}
        <section>
          <h2>Client's name</h2>
          <p>Client's address</p>
        </section>
        {/* End of Client Info */}

        {/* Invoice Details */}
        <article>
          <ul>
            <li>Invoice Number</li>
            <li>Invoice Date</li>
            <li>Due Date</li>
          </ul>
        </article>
        {/* End of Invoice Details */}

        
        {/*Notes to the client*/}
        <section>
          <p>Notes to the client...</p>
        </section>
        {/*End of Notes to the client*/}

        {/* footer Items */}
        <footer>
          <ul>
            <li>Your name</li>
            <li>Your email</li>
            <li>Phone number</li>
            <li>Bank</li>
            <li>Account Holder Name</li>
            <li>Account Number</li>
            <li>website</li>
          </ul>
        </footer>
        {/* End of footer Items */}
      </main>
    </>
  );
}

export default App;
