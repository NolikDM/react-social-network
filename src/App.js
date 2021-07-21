import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props) => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Route path='/messages' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
                  <Route path='/profile' render={ () => <Profile state={props.state.profilePage}/> }/>
                  <Route path='/music' render={ (props) => <Music/> }/>
                  <Route path='/news' render={ (props) => <News/> }/>
                  <Route path='/settings' render={ (props) => <Settings/> }/>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;