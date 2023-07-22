import './App.css';
import Post from './Post';
import Header from './Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <BrowserRouter>
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
