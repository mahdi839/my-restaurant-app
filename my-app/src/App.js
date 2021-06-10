import Nav from '../src/components/Nav'
import Home from './components/Home'
import About from './components/About'
import Team from '../src/components/Team'
import Menu from '../src/components/Menu'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Team />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
