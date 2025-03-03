import { useEffect, useRef, useState } from "react";
import "./Carousel.css";

function Carousel({ sectionNumberList }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [modifiedSectionList, setModifiedSectionList] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slider = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);
  const carousel = useRef(null);
  const numberOfSections = sectionNumberList.length;
  const widthPercent = numberOfSections > 0 ? 100 / numberOfSections : 0;

  const transitionTime = 0.2;

  useEffect(() => {
    
    const modifiedList = [...sectionNumberList];
    modifiedList.push(sectionNumberList[0])
    modifiedList.unshift(sectionNumberList[sectionNumberList.length - 1]);
    
    const sectionList = slider.current.children;

    for (let section of sectionList) {
      section.style.flexBasis = `${widthPercent}%`;
      section.style.width = `${widthPercent}%`;      
    }
    
    // Set the slider's width
    slider.current.style.width = `${100 * numberOfSections}%`;

    // slider.current.style.transition = 'none'; // Prevent transition animation on load
    slider.current.style.transform = `translate(-${widthPercent}%)`
    
    setModifiedSectionList(modifiedList);
    setCurrentIndex(1);


  }, [sectionNumberList]);

  
  useEffect(() => {
    
    const sectionList = slider.current.children;

    for (let section of sectionList) {
      section.style.flexBasis = `${widthPercent}%`;
      section.style.width = `${widthPercent}%`;      
    }
    
    // Set the slider's width
    slider.current.style.width = `${100 * numberOfSections}%`;


  }, [modifiedSectionList]);

  const nextSlide = () => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);

    if (currentIndex == sectionNumberList.length) {
      
      slider.current.style.transform = `translate(-${(currentIndex + 1) * widthPercent}%)`;
      
      setTimeout(() => {
        slider.current.style.transition = 'none';
        slider.current.style.transform = `translate(-${widthPercent}%)`;
        setIsTransitioning(false);
      }, transitionTime * 1000)
      
      
      setCurrentIndex(1);

    } else if (currentIndex < sectionNumberList.length) {
      slider.current.style.transition = `all ${transitionTime}s ease-out`
      slider.current.style.transform = `translate(-${(currentIndex + 1) * widthPercent}%)`;
      setTimeout(() => {setIsTransitioning(false)}, transitionTime * 1000);
      setCurrentIndex(prevIndex => prevIndex + 1)
    }

    // setCurrentIndex((prevIndex) => (prevIndex + 1) % numberOfSections);
  };



  const prevSlide = () => {
    console.log(`currentIndex = ${currentIndex}`)
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    if (currentIndex == 1) {

      slider.current.style.transform = `translate(-${(currentIndex - 1) * widthPercent})`;

            
      setTimeout(() => {
        slider.current.style.transition = 'none';
        slider.current.style.transform = `translate(-${sectionNumberList.length * widthPercent}%)`;
        setIsTransitioning(false);
      }, transitionTime * 1000);


      setCurrentIndex(sectionNumberList.length);

    } else if (currentIndex > 1) {
      slider.current.style.transform = `translate(-${(currentIndex - 1) * widthPercent}%)`;
      slider.current.style.transition = `all ${transitionTime}s ease-out`;
      setTimeout(() => {setIsTransitioning(false)}, transitionTime * 1000);
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
    }
  };

  return (
    <>
      <h1>캐러샐 내부</h1>
      <div className="container">
        <div className="carousel">
          <div
            ref={slider}
            className="slider"
            // style={{ transform: `translateX(-${currentIndex * (100 / numberOfSections)}%)`, transition: 'transform 0.5s ease-out' }}
          >
            {modifiedSectionList.map((sectionNumber, index) => (
              <section key={index}>
                {`Section ${sectionNumber}`}
              </section>
            ))}
          </div>
          <div>
            <span className="arrow prev" onClick={prevSlide}>prev</span>
            <span className="arrow next" onClick={nextSlide}>next</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
