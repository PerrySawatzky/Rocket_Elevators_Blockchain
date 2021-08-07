import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Pages'
import projectoffice from './Pages/projectoffice';
import materialprovider from './Pages/materialprovider';
import solutionmanufacturing from './Pages/solutionmanufacturing';
import quality from './Pages/quality';
import freeeth from './Pages/freeeth';

function App ()  {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/freeeth' exact component={freeeth}></Route>
        <Route path='/office' component={projectoffice}></Route>
        <Route path='/material' component={materialprovider}></Route>
        <Route path='/solution' component={solutionmanufacturing}></Route>
        <Route path='/quality' component={quality}></Route>
      </Switch>
    </Router>
  );
}

export default App;