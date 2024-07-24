import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './components/Home/HomeComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import LoginComponent from './components/login/LoginComponent';
import SignupDocComponent from './components/login/SignupDocComponent.js';
import SignupPatComponent from './components/login/SignupPatComponent.js';
import SearchDoctorPage from './components/search/search_doctor.js';
import Profile_Component from './components/profile_doc/Profile_Component.js';
import StoreComponent from './components/store/StoreComponent.js';
// import BlogComponent from './components/BlogComponent';


const App = () => {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route exact path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/signup-doctor" element={<SignupDocComponent/>} />
        <Route path="/signup-patient" element={<SignupPatComponent/>} />
        <Route path="/appointments" element={<SearchDoctorPage/>} />
        <Route path="/profiledoc" element={<Profile_Component/>} />
        <Route path="/store" element={<StoreComponent/>} />
         {/*<Route path="/store" component={StoreComponent} />
        <Route path="/blog" component={BlogComponent} />  */}
      </Routes>
      <FooterComponent />
     </>
  );
};

export default App;
