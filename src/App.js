import './App.css';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/friend/:friendId" element={<FriendDetail />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NoMatch />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
