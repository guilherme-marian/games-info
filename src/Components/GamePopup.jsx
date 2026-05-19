import {motion} from 'framer-motion';
import {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function GamePopup(props) {

  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  const videoSrc = props.video1?.startsWith('./videos/') || props.video1?.startsWith('/videos/')
    ? process.env.PUBLIC_URL + props.video1.replace(/^\./, '')
    : props.video1;

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  

  return (
    <div className="game-popup">
        <button className="back-button" onClick={() => navigate('/')}>← Voltar</button>
        <button className="close-button" onClick={() => navigate('/')}>×</button>


        <h2>{props.title}</h2>
        <div className="popup-content">
          <img className="game-image" src={props.image} alt={props.title}/>
          <div className="info">

            <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div 
                className="inner-carousel" 
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                ref={carouselRef}
                    >
                    <motion.div className="carousel-item">
                        <video controls>
                            <source src={videoSrc} type="video/mp4"/>
                        </video>
                    </motion.div>
                    <motion.div className="carousel-item">
                        <img src={props.image1} alt="game 1"/>
                    </motion.div>
                    <motion.div className="carousel-item">
                        <img src={props.image2} alt="game 2"/>
                    </motion.div>
                    <motion.div className="carousel-item">
                        <img src={props.image3} alt="game 3"/>
                    </motion.div>
                    <motion.div className="carousel-item">
                        <img src={props.image4} alt="game 4"/>
                    </motion.div>
                </motion.div>
            </motion.div>

            <p>{props.description}</p>
            <button className="play-button"><a href={props.playLink} >Jogar</a></button>
          </div>
        </div>
    </div>
  );
}

export default GamePopup;