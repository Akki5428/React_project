import logo from './logo.svg';
import './App.css';
import { Withdraw } from './component/Withdraw';
import { Trans } from './component/Trans';
import { Deposit } from './component/Deposit';
import { Header } from './component/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './component/Footer';

function App() {
  var User = [
    {
      'id' : 1,
      'name' : 'Akshat',
      'amount' : 500
    },
    {
      'id' : 2,
      'name' : 'Shubham',
      'amount' : 1000
    },
    {
      'id' : 3,
      'name' : 'Jay',
      'amount' : 2000
    }
  ]
  
  return (
    <div className="App"> 
    <Header/>
    <Routes>
      <Route path='/' element={<Trans/>}></Route>
      <Route path='/withdraw' element={<Withdraw user={User}/>}></Route>
      <Route path='/dipo' element={<Deposit user={User}/>}></Route>
      <Route path='/trans' element={<Trans user={User}/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
