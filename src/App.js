import './App.css';
import ImageSlider from './components/ImageSlider';
import {SliderData} from './components/SliderData';

function App() {
  return (
    <div className="App">

      <div className='introPic'>
        <img src="./img/ik_00.jpg" alt="Insektenkonzert" />
      </div>
      <div className='introBox'>
        <h1>~ workflowsnips ~</h1>
      </div>
      <ImageSlider slides={SliderData} />

        {/* <button>&#8226; ENTER &#8226;</button> */}

        <div className='outroBox'>
          <h1>poliTRON&#174;</h1>
          <img src="./logo.png" className="App-logo" alt="logo" />		    
        </div> 

    </div>
  );
}

export default App;