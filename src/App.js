import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import {action, originals,comedy,horror,romantic, documentary} from './urls'
function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Banner></Banner>
     <RowPost url={originals} title='Netflix Originals'></RowPost>
     <RowPost url={action} title='Action' isSmall></RowPost>
     <RowPost url={comedy} title='comedy' isSmall></RowPost>
     <RowPost url={horror} title='horror' isSmall></RowPost>
     <RowPost url={romantic} title='Romantic' isSmall></RowPost>
     <RowPost url={documentary} title='Documentary' isSmall></RowPost>
     <Footer></Footer>
    </div>
  );
}

export default App;
