
import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App" style={{display:'flex'}}>

      <Sidebar/>
      <Main/>
      
    </div>
  );
}

export default App;
