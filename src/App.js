import './main.scss';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Movies } from './components/Movies/Movies';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Movies/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
