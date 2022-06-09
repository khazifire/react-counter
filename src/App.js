import Counters from './components/counters'

function App() {
 
  return (
    <div className="sm:h-full xl:h-screen bg-gray-800 flex items-center justify-center">
      <div>
        <h1 className='text-4xl font-semibold text-center text-gray-100'>Air Elements Tracker</h1>
        <Counters />
        <Counters />
      </div>
    </div>
  );
}
export default App;
