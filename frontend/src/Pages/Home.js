import React, {useRef} from 'react'
import './Home.css'

import HowToSection from '../Components/HowToSection'

const stepsContent = [
    {
      title: 'Step 1 ',
      description: 'Write out your thoughts. anxieties, joys, hopes and dreams, and most importantly - your Promises. ',
      gifSrc: 'https://via.placeholder.com/400',
      backgroundColor: '#59ACFF', //blue
    },
    {
      title: 'Step 2 ',
      description: "Tell us when you want your mail delivered to you. ",
      gifSrc: 'https://via.placeholder.com/400',
      backgroundColor: '#FFE359', //yellow
    },
    {
      title: 'Step 3 ',
      description: "Recieve a surprise in your mailbox! Hopefully it hasn’t gone to your spam folder. ",
      gifSrc: 'https://via.placeholder.com/400',
      backgroundColor: '#FF7040', //red
    },
  ];



const Home = () => {
    return(
        <>
            <div className="headingContainer">
                <h1>How It Works</h1>
                <p>Whether its your hopes or anxieties. Capture today’s thoughts and deliver them to your future self when you need them most!</p>
            </div>
            <div className="howTo">
                {stepsContent.map((step, index) => (
                        <HowToSection
                            key={index}
                            title={step.title}
                            description={step.description}
                            gifSrc={step.gifSrc}
                            backgroundColor={step.backgroundColor}
                        />
                ))}
            </div>
        </>
    )
}

export default Home;