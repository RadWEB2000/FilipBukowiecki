import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Movies } from './components/Movies/Movies';
import { Footer } from './components/Footer/Footer';


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*::selection{
    background: #000;
    color: #fff;
}

*::after,
*::before{
    content: '';
    position: absolute;
}



body{
    background: #161616;
    color: #fff;
    font-family: 'Exo 2', sans-serif;
    overflow-x: hidden;
    width: 100vw;

   
}


main{
    transition:1s  linear background;
    padding:4rem 0;
    min-height: 100vh;
  &.scrolled{
    min-height: 100vh;
        background: #f5f5f5;
    }
}
`

export const App = () => {

  const [scroll, scrollToggle] = useState(false);

   window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
          scrollToggle(true);
        } else {
            scrollToggle(false)
        }
    })


  return (
    <>
      <GlobalStyle />
      <Header />
      <main className={scroll ? 'scrolled' : null }>
        <About />
        <Movies/>
      </main>
        <Footer />
      
    </>
  );
}

export default App;
