import React from 'react';
import GlobalStyles from './globalStyles'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {  Footer, Navbar } from './components';
import {Home, NotFound ,Product , Services,SignUp} from './pages/import'

const App = () => {
    return (
        <Router>
            <GlobalStyles/>
            <Navbar/>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/services"  element={<Services/>} />
                <Route path="/products" element={<Product/>}/>
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="*"  element={<NotFound/>} />
               
            </Routes>
            <Footer/>
            
        </Router>
    );
};

export default App;