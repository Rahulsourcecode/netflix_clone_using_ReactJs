import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action, originals,comedy} from './urls'
function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Banner></Banner>
     <RowPost url={originals} title='Netflix Originals'></RowPost>
     <RowPost url={action} title='Action' isSmall></RowPost>
     <RowPost url={comedy} title='comedy' isSmall></RowPost>
     <RowPost url={comedy} title='comedy' isSmall></RowPost>

    </div>
  );
}

export default App;
