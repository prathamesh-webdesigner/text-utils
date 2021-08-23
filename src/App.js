import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // for navbar dark mode 
  const [alert, setAlert] = useState(null); //for bootstrap alert

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      document.getElementById('switchText').innerHTML = 'Disable Dark Mode';
      showAlerts("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementById('switchText').innerHTML = 'Enable Dark Mode';
      showAlerts("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title='Text Tutils' menu1='Home' menu2='About' mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className='container my-4'>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlerts={showAlerts} heading='Enter the text to analyze below' mode={mode}></TextForm>
            </Route>
          </Switch>
        </div>
      </Router> */}

      <Navbar title='Text Tutils' menu1='Home' menu2='About' mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className='container my-4'>
        <TextForm showAlerts={showAlerts} heading='Enter the text to analyze below' mode={mode}></TextForm>
        </div>
    </>
  );
}

export default App;