import logo from './logo.svg';
import './App.css';

function App() {
  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className='p-5 lg:max-w-xl lg:mx-auto'>
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5">
          <div>
            <h2>Invoice</h2>
          </div>

          <div>
            <ul className='flex items-center justify-between flex-wrap'>
              <li><button className='btn btn-print' onClick={handlePrint}>Print</button></li>
              <li><button className='btn btn-download'>Download</button></li>
              <li><button className='btn btn-send'>Send</button></li>
            </ul>
          </div>
        </header>
        {/* End of Header */}

        {/* My Info */}
        <section className='flex flex-col items-end justify-end'>
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
