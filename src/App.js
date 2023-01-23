import './App.scss';

import {About, Footer,Header,Skills,Testimonial,Work} from "./container"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
    </div>
  );
}

export default App;
