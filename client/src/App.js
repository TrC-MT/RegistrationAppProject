import './App.css';
import PAGES from './pages/Pages'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route element={<NotPrivateRoutes/>}> */}
            <Route exact path="/" element={<PAGES.Page1 />} />
            <Route path="/signUp" element={<PAGES.Page2 />} />
          {/* </Route> */}
          <Route element={<PrivateRoutes/>}>
            <Route path="/userProfile" element={<PAGES.Page3 />} />
            <Route path="/userProfile/courses" element={<PAGES.Page4 />} />
            <Route path="/userProfile/adminData" element={<PAGES.Page5/>} />
            <Route path="/userProfile/adminData/manageCourses" element={<PAGES.Page6/>}/>
          </Route>
          <Route path='*' element={<PAGES.PageE/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;


function checkToken(){
  console.log('checkToken was run')
  // fetch('/validate', {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     question: 'Is this client logged in?'
  //   }),
  // })
  // .then((res) => res.json())
  // .then(data => {
  //   return data;
  // })

  //These will be deleted. Comment out the return true depending on what pages you want.
  return true
  return false;
}

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isValidToken, setIsValidToken] = useState(); // <-- initially undefined

  useEffect(() => {
    // initial mount or route changed, check token
    setIsValidToken(!!checkToken());
  }, [pathname]);

  if (isValidToken === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return isValidToken ? <Outlet/> : navigate('/');
}

// const NotPrivateRoutes = () => {
//   const navigate = useNavigate();
//   const { pathname } = useLocation();

//   const [isValidToken, setIsValidToken] = useState(); // <-- initially undefined

//   useEffect(() => {
//     // initial mount or route changed, check token
//     setIsValidToken(!!checkToken());
//   }, [pathname]);

//   if (isValidToken === undefined) {
//     return null; // or loading indicator/spinner/etc
//   }

//   return !isValidToken ? <Outlet/> : navigate('/userProfile');
// }