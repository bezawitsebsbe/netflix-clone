import './App.css';
import Home from './pages/Home/Home'


// function App() {
//   return (
//     <div className="App">
//       <Home/>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 // Your Row component
import TrailerPage from './components/TrailerPage/TrailerPage.js' // The new TrailerPage component
import Row from './components/Rows/Row/Row.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Netflix-Clone-2024" element={<Home/>}/>
                <Route path="/" element={<Row title="Movies" fetchUrl="your-fetch-url" isLargeRow={true} />} />
                <Route path="/trailer/:videoId" element={<TrailerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
