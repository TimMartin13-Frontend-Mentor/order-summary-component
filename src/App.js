import React from 'react';
import OrderCard from "./components/OrderCard";
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <OrderCard />
      </main>
      <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
          Coded by <a href="#" target="_blank" rel="noreferrer">Tim Martin</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
