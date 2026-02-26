
import './App.css';
import Counterprops from './components/Counterprops';
function App() {

    
  return (
    <>
      <h1 className="text-2xl font-bold text-center p-4">Props Counter App</h1>
      {/* call  */}
      <Counterprops count={0} />
    </>
  );
}

export default App
