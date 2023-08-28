// import logo from './logo.svg';
import './App.css';
import { AboutUs } from './component/AboutUs';
import Header from './component/Header';
// import {STU} from './table/STU';
// import { Employee } from './propsdemo/Employee';
// // import { Student } from './propsdemo/Student';
// import { Userform } from './component/Userform';
// import { StudentReg } from './component/StudentReg';
// import { ProductReg } from './component/ProductReg';
// import { Student } from './component/students/Student';
import {Routes , Route} from 'react-router-dom';
import { ContactUs } from './component/students/ContactUs';
import { Manager } from './component/Manager';
import { Ceo } from './component/students/Ceo';
import { DashBoard } from './component/DashBoard';
import { PageNotFound } from './component/PageNotFound';
import { Director } from './component/Director';
import { StoreData } from './component/StoreData';
import { GetData } from './component/GetData';
import { LoginComponent } from './component/LoginComponent';
import { ApiDemo1 } from './component/ApiDemo1';
import { ApiDemo2 } from './component/ApiDemo2';
import { ApiDemo3 } from './component/ApiDemo3';
import { ApiDemo4 } from './component/ApiDemo4';
import { ApiDemo5 } from './component/ApiDemo5';
import { ApiTemp } from './component/ApiTemp';
import { ApiDemo6 } from './component/ApiDemo6';
import { UserCompQuery } from './query/UserCompQuery';
import axios from 'axios';
import { Counter } from './query/Counter';


function App() {
  // var name = 'Akshat'
  // var age = '19'
  // var ismarried = false 
  // var title = 'Royal Techosoft'

  // var student = {
  //   name : 'Rahul',
  //   marks : 10
  // }

  // var style = {
  //   color : "red"
  // }
  axios.defaults.baseURL = "https://node5.onrender.com"

  return (
    
    <div className="App">
    {/* <Student t = {title} s = {style}/> */}
    {/* <Student/> */}
    {/* <Userform/> */}
    {/* <StudentReg/> */}
    {/* <ProductReg/> */}
    {/* <STU/> */}
    {/* <Employee/> */}
    {/*        <h1>{name}</h1>
            <h1>{age}</h1>
            <h1>{ismarried === true ? 'Married' : 'Unmarried'}</h1>
            <h1>{student.name}</h1>
            <h1>
              {student.marks >= 80 ? <h1 style={{color : 'green'}}>Grade A</h1> : <h1 style={style}>Grade B</h1>}
            </h1>
    <Footer/> */}
    <Header/>
    {/* <Counter/> */}
    <Routes>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/contactus/manager' element={<Manager/>}></Route>
      <Route path='/contactus/ceo' element={<Ceo/>}></Route>
      <Route path='/' element={<DashBoard/>}></Route>
      {/* <Route path='/*' element={<PageNotFound/>}></Route> */}
      <Route path='/*' element={<h3>PAGE NOT FOUND</h3>}></Route>
      <Route path='/contactus/director/:id' element={<Director/>}></Route>
      <Route path='/store' element={<StoreData/>}></Route>
      <Route path='/getdata' element={<GetData/>}></Route>
      <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
      <Route path='/apidemo2' element={<ApiDemo2/>}></Route>
      <Route path='/apidemo3' element={<ApiDemo3/>}></Route>
      <Route path='/apidemo4' element={<ApiDemo4/>}></Route>
      <Route path='/apidemo5' element={<ApiDemo5/>}></Route>
      <Route path='/apitemp' element={<ApiTemp/>}></Route>
      <Route path='/update/:id' element={<ApiDemo6/>}></Route>
      <Route path='/apidemo6' element={<ApiDemo6/>}></Route>
      <Route path='/usercompquery' element={<UserCompQuery/>}></Route>
    </Routes>
    {/* <LoginComponent/> */}
    {/* <ApiDemo2/> */}
    </div>
  );
}

export default App;
