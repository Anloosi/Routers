import React from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements,
   Route,
    Link, 
    Outlet,
    RouterProvider
  } from 'react-router-dom';
import {Home} from './Pages/Home.jsx'
import {Contact} from './Pages/Contact.jsx'
import {Profile} from './Pages/Profile.jsx'
import { Data, dataLoader } from './Pages/Data';



export function App(props) {

const router = createBrowserRouter (
      createRoutesFromElements (
        <Route path = "/" element={<Root/>}>
          <Route  index element={<Home/>} />
          <Route  path="/contact" element={<Contact/>} />
          <Route  path="/profile" element={<Profile/>} />
          <Route  path="/Data" element={<Data />} loader={dataLoader}/>
        </Route>
      )
);

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  return (
  <>
  <div>
    <Link to="/">Home</Link>
    <Link to="/">Data</Link>
    <Link to="/">Contact</Link>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default App;