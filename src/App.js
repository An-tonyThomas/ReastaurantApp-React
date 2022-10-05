import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import RestuarantDetails from './components/RestuarantDetails'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/restuarant-details/:id' element={<RestuarantDetails/>} />
        
       
      </Routes>
     
    
      <Footer/>
      </Router>
   
  );
}
export default App;
