import React, {Component} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import { Navigate } from 'react-router-dom'
import PortFolioContext from './context/PortfolioContext'

import './App.css'

class App extends Component{

  state = {isDarkTheme: false}

  componentDidMount() {
    // Load the isDarkTheme value from local storage when the component mounts
    const isDarkTheme = localStorage.getItem('isDarkTheme');
    if (isDarkTheme) {
      this.setState({ isDarkTheme: JSON.parse(isDarkTheme) });
    }
  }

  changeTheme = () => {
    this.setState(prevState => {
      const newTheme = !prevState.isDarkTheme;
      
      // Save the newTheme value to local storage
      localStorage.setItem('isDarkTheme', JSON.stringify(newTheme));

      return { isDarkTheme: newTheme };
    });
  }

  render(){
    
    const {isDarkTheme} = this.state

    return(
      
      <PortFolioContext.Provider value={{isDarkTheme, changeTheme: this.changeTheme}}>
        <div className='portfolio'>          
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />            
          </Routes>
        </div>
      </PortFolioContext.Provider>
    )
  }
}

export default App