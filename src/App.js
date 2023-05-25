import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import WhatiDo from './components/WhatiDo';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <WhatiDo/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
