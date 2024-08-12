import logo from './logo.svg';
import './App.css';

function App() {
  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className='m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow'>
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className='font-bold uppercase tracking-wide text-4xl mb-3'>Estimate</h1>
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
          <h2 className='text-xl uppercase'>Johnathon Forbush</h2>
          <p>Address</p>
        </section>
        {/* End of My Info */}

        {/* Client Info */}
        <section className='mt-5'>
          <h2 className='text-xl uppercase'>Client's name</h2>
          <p>Client's address</p>
        </section>
        {/* End of Client Info */}

        {/* Invoice Details */}
        <article className='my-5 flex items-end justify-end'>
          <ul>
            <li><span className='font-bold'>Estimate Number</span></li>
            <li><span className='font-bold'>Estimate Date</span></li>
            <li><span className='font-bold'>Due Date</span></li>
          </ul>
        </article>
        {/* End of Invoice Details */}

        {/* Table */}
        <div className='my-5'>This is the table</div>
        {/* End of Table */}
        {/*Notes to the client*/}
        <section className='mb-5'>
          <p>Notes to the client...</p>
        </section>
        {/*End of Notes to the client*/}

        {/* footer Items */}
        <footer>
          <ul className='flex flex-wrap items-center justify-center'>
            <li><span className='font-bold'>Your name:</span> Arkstone Flooring LLC</li>
            <li><span className='font-bold'>Your email:</span> JohnathonForbush@arkstoneflooring.com</li>
            <li><span className='font-bold'>Phone number:</span> 816-457-7697</li>
            <li><span className='font-bold'>website:</span> www.arkstoneflooring.com</li>
          </ul>
        </footer>
        {/* End of footer Items */}
      </main>
    </>
  );
}

export default App;
