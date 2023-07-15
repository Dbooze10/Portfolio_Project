import './App.css';
import Post from './Post';
import Header from './Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout'
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
