import React, {useState} from 'react';
import '../style/home.css'
import Editor from "./Editor";

const Home = () => {

  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <main className="main-content" id="Home">
      <div className="main-container">
        <div className="discription">
          <h1>Més Que un Club !</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore maiores nulla rerum saepe. Aliquam debitis, dignissimos eius est et</p>
        </div>
        <button>Let's Explore</button>
        <Editor code={code} onChange={handleCodeChange} />
      </div>
    </main>
  );
};

export default Home;
