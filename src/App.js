import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Subscription from './pages/Subscription';
import Ranking from './pages/Ranking';
import Logout from './pages/Logout';
import './App.css';
import ResetCSS from './assets/css/reset';
import GlobalCSS from './assets/css/global';

function App() {
  return (
    <BrowserRouter>
      <ResetCSS/>
        <GlobalCSS/>
          <Routes>
            <Route element={< Login />} path={"/"} />
            <Route element={< Subscription />} path={"/signup"} />
            <Route element={< Home />} path={"/home"} />
            <Route element={< Ranking />} path={"/ranking"} />
            <Route element={< Logout />} path={"/logout"} />

          </Routes>
  
    </BrowserRouter>
  );
}

export default App;
