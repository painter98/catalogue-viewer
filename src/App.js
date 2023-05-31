import React,{useState} from 'react';
import Images from './components/Images.js';
import Viewer from './components/Viewer.js';
import {MdArrowLeft,MdArrowRight} from "react-icons/md";
import Thumbs from './components/thumbnail.js';
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import './components/Viewer.css';


function App() {

  const [ catalogs ] = useState([...Images]);
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ slideTimer, setSlideTimer ] = useState(null);
  const [ slideDuration ] = useState(3000);
  const [slide,setSlide] = useState(true);


  const startSlidShow = () => {
    setSlide(!slide);

    if(slide){
      onSlideChange();
      setSlide(false);
    }
    else if(!slide && slideTimer!=null){
      clearInterval(slideTimer);
      setSlideTimer(null);
    }
  }
  

  const onSlideChange = () => {
    let interval = setInterval ( () => {
      document.getElementById("next_button").click();
    }, slideDuration);
    setSlideTimer(interval);
  }


  return (
    <div className="App">
      <Viewer catalogImage={catalogs[activeIndex]}/>
      <div className='play'>
        <div className='slides'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={() => {
                let prevIndex = activeIndex-1;
                if(prevIndex < 0){
                  prevIndex = catalogs.length - 1;
                }
                setActiveIndex(prevIndex);
              }}
            >
              <MdArrowLeft />
            </button>
            <Thumbs 
                items={ catalogs } 
                currentIndex={ activeIndex } 
                setActiveIndex={setActiveIndex}
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              id="next_button"
              onClick={() => {
                let nextIndex = activeIndex+1;
                if(nextIndex >= catalogs.length){
                  nextIndex = 0;
                }
                setActiveIndex(nextIndex); 
              }}
            >
            <MdArrowRight />
            </button>
            </div>
            <div>
             <button className="playing" onClick={(event) => {startSlidShow(event)}}>{slide?<AiFillPlayCircle/>:<AiFillPauseCircle/>}</button>
            </div>
          </div>
    </div>
  );
}

export default App;
