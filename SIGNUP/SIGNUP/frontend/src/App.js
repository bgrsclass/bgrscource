// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Authentication
import Signup from './Signup';
import Login from './Login';

// Dashboard and Main Pages
import Dashboard from './Dashboard';
import Profile from './Sidebar/Profile';
import Portfolio from './Sidebar/Portfolio';
import Cource from './Menu/Cource';
import About from './Menu/About';
import Test from './Menu/Test';
import Certificate from './Menu/Certificate';
import Contact from './Menu/Contact';
import Slide from './Sliding/Slide';

// BSE Schooling
import Bsedetail from './Cource/School-Inter/BSE/Bsedetail';
import BSEClass1 from './Cource/School-Inter/BSE/Classes/Class1';
import BSEClass2 from './Cource/School-Inter/BSE/Classes/Class2';
import BSEClass3 from './Cource/School-Inter/BSE/Classes/Class3';
import BSEClass4 from './Cource/School-Inter/BSE/Classes/Class4';
import BSEClass5 from './Cource/School-Inter/BSE/Classes/Class5';
import BSEClass6 from './Cource/School-Inter/BSE/Classes/Class6';
import BSEClass7 from './Cource/School-Inter/BSE/Classes/Class7';
import BSEClass8 from './Cource/School-Inter/BSE/Classes/Class8';
import BSEClass9 from './Cource/School-Inter/BSE/Classes/Class9';
import BSEClass10 from './Cource/School-Inter/BSE/Classes/Class10';

// CBSE Schooling
import Cbsedetail from './Cource/School-Inter/CBSE/Cbsedetail';
import CBSEClass1 from './Cource/School-Inter/CBSE/Classes/Cbseclass1'// Importing the Class1 component for CBSE
import CBSEClass2 from './Cource/School-Inter/CBSE/Classes/Cbseclass2';
import CBSEClass3 from './Cource/School-Inter/CBSE/Classes/Cbseclass3';
import CBSEClass4 from './Cource/School-Inter/CBSE/Classes/Cbseclass4';
import CBSEClass5 from './Cource/School-Inter/CBSE/Classes/Cbseclass5';
import CBSEClass6 from './Cource/School-Inter/CBSE/Classes/Cbseclass6';
import CBSEClass7 from './Cource/School-Inter/CBSE/Classes/Cbseclass7';
import CBSEClass8 from './Cource/School-Inter/CBSE/Classes/Cbseclass8';
import CBSEClass9 from './Cource/School-Inter/CBSE/Classes/Cbseclass9';
import CBSEClass10 from './Cource/School-Inter/CBSE/Classes/Cbseclass10';
import CBSEClass11 from './Cource/School-Inter/CBSE/Classes/Cbseclass11';
import CBSEClass12 from './Cource/School-Inter/CBSE/Classes/Cbseclass12';

// ICSE Schooling
import Icsedetail from './Cource/School-Inter/ICSE/Icsedetail';
import ICSEClass1 from './Cource/School-Inter/ICSE/Classes/Icseclass1';
import ICSEClass2 from './Cource/School-Inter/ICSE/Classes/Icseclass2';
import ICSEClass3 from './Cource/School-Inter/ICSE/Classes/Icseclass3';
import ICSEClass4 from './Cource/School-Inter/ICSE/Classes/Icseclass4';
import ICSEClass5 from './Cource/School-Inter/ICSE/Classes/Icseclass5';
import ICSEClass6 from './Cource/School-Inter/ICSE/Classes/Icseclass6';
import ICSEClass7 from './Cource/School-Inter/ICSE/Classes/Icseclass7';
import ICSEClass8 from './Cource/School-Inter/ICSE/Classes/Icseclass8';
import ICSEClass9 from './Cource/School-Inter/ICSE/Classes/Icseclass9';
import ICSEClass10 from './Cource/School-Inter/ICSE/Classes/Icseclass10';

// CHSE Schooling
import Chsedetail from './Cource/School-Inter/CHSE/Chsedetail';
import CHSEClass11 from './Cource/School-Inter/CHSE/classes/Chseclass11';
import CHSEClass12 from './Cource/School-Inter/CHSE/classes/Chseclass12'

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard and Main Page Routes */}
        <Route path="/home" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cource" element={<Cource />} />
        <Route path="/test" element={<Test />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/slide" element={<Slide />} />

        {/* BSE Schooling Routes */}
        <Route path="/bse-schooling" element={<Bsedetail />} />
        <Route path="/bse/class1" element={<BSEClass1 />} />
        <Route path="/bse/class2" element={<BSEClass2 />} />
        <Route path="/bse/class3" element={<BSEClass3 />} />
        <Route path="/bse/class4" element={<BSEClass4 />} />
        <Route path="/bse/class5" element={<BSEClass5 />} />
        <Route path="/bse/class6" element={<BSEClass6 />} />
        <Route path="/bse/class7" element={<BSEClass7 />} />
        <Route path="/bse/class8" element={<BSEClass8 />} />
        <Route path="/bse/class9" element={<BSEClass9 />} />
        <Route path="/bse/class10" element={<BSEClass10 />} />

        {/* CBSE Schooling Routes */}
{/* CBSE Schooling Routes */}
<Route path="/cbse" element={<Cbsedetail />} />
<Route path="cbseclass1" element={<CBSEClass1 />} />

<Route path="/cbseclass2" element={<CBSEClass2 />} />
<Route path="/cbseclass3" element={<CBSEClass3 />} />
<Route path="/cbseclass4" element={<CBSEClass4 />} />
<Route path="/cbseclass5" element={<CBSEClass5 />} />
<Route path="/cbseclass6" element={<CBSEClass6 />} />
<Route path="/cbseclass7" element={<CBSEClass7 />} />
<Route path="/cbseclass8" element={<CBSEClass8 />} />
<Route path="/cbseclass9" element={<CBSEClass9 />} />
<Route path="/cbseclass10" element={<CBSEClass10 />} />
<Route path="/cbseclass11" element={<CBSEClass11 />} />
<Route path="/cbseclass12" element={<CBSEClass12 />} />


        {/* ICSE Schooling Routes */}
        <Route path="/icse-schooling" element={<Icsedetail />} />
        <Route path="/icseclass1" element={<ICSEClass1 />} />
        <Route path="/icseclass2" element={<ICSEClass2 />} />
        <Route path="/icseclass3" element={<ICSEClass3 />} />
        <Route path="/icseclass4" element={<ICSEClass4 />} />
        <Route path="/icseclass5" element={<ICSEClass5 />} />
        <Route path="/icseclass6" element={<ICSEClass6 />} />
        <Route path="/icseclass7" element={<ICSEClass7 />} />
        <Route path="/icseclass8" element={<ICSEClass8 />} />
        <Route path="/icseclass9" element={<ICSEClass9 />} />
        <Route path="/icseclass10" element={<ICSEClass10 />} />
        {/* CHSE Schooling Routes */}
        <Route path="/chse-schooling" element={<Chsedetail />} />
        <Route path="/chseclass11" element={<CHSEClass11 />} />
        <Route path="/chseclass12" element={<CHSEClass12 />} />
      </Routes>
    </Router>
  );
}

export default App;
