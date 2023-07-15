import './App.css';
import Post from './Post.js';
import Header from './Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {
          <main>
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        } />
        <Route path={'/login'} element={
          <main>
            <Header />
            <div>login</div>
          </main>
        } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
