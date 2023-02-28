import './App.css';
import PAGES from './pages/Pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PAGES.Page1 />} />
          <Route path="/signUp" element={<PAGES.Page2 />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
