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
          <Route path="/userProfile" element={<PAGES.Page3 />} />
          <Route path="/userProfile/courses" element={<PAGES.Page4 />} />
          <Route path="/userProfile/adminData" element={<PAGES.Page5/>} />
          <Route path="/userProfile/adminData/manageCourses" element={<PAGES.Page6/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
