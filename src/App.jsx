import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image6 from './assets/image6.jpg'
import image4 from './assets/img4.jpg'
import image2 from './assets/image2.jpg'
import image5 from './assets/image5.jpg'
import pr1 from './assets/p1.jpg'
import pr2 from './assets/p2.jpg'
import pr3 from './assets/p3.jpg'
import pr4 from './assets/p4.jpg'
import pr5 from './assets/p5.jpg'
import pr6 from './assets/p6.jpg'






import { BsGithub } from "react-icons/bs";
import { FaHackerrank, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill,RiArrowRightSLine,RiArrowLeftSLine } from "react-icons/ri";





function App() {
 




  const [count, setCount] = useState(0);
  const projects = [
    {
      name: 'Sathyabam Guide Selection Portal',
      image: pr1,
      url: 'https://guideselectionportal.netlify.app/',
    },
    {
      name: 'CGPA Calculator',
      image: pr2,
      url: 'https://sist-cgpacalulator.netlify.app/',
    
    },
    {
      name: 'Ride On Wheels',
      image: pr3,
      url: 'https://pradeep1g.github.io/_HomePage/',
    
    },
    {
      name: 'Simon Game',
      image: pr4,
      url: 'https://pradeep1g.github.io/simonGame/',
    
    },
    {
      name: 'Sample Portfolio',
      image: pr5,
      url: 'https://pradeep1g.github.io/cv1/',
    
    },
    {
      name: 'Task Management',
      image: pr6,
      url: 'https://tasks-manager-site.netlify.app/',
    
    }
    // Add more project objects as needed
  ];

  const handlePrevProject = () => {
    setCount((prevCount) => (prevCount - 1 < 0 ? projects.length - 1 : prevCount - 1));
  };

  const handleNextProject = () => {
    setCount((prevCount) => (prevCount + 1 >= projects.length ? 0 : prevCount + 1));
  };






  return (
    <>
      <div className='lg:h-full md:p-48 pb-28 bg-black text-purple-600 '>
      <div className='flex justify-center items-center'>
      <img  src={image5}></img></div>

          <div className='flex justify-center items-center text-4xl md:text-8xl font-bold'>

              <h1>I'm Pradeep</h1>
          </div>
          <div className='flex justify-center items-center text-lg md:text-2xl pt-2'>
            <p>A Web Developer.</p>
          </div>
          {/* <img src={image4}></img> */}
      </div>





      <div className='md:pt-36 md:pb-24 py-16'>
        <div className='flex-col space-y-4 md:space-y-8 justify-center items-center'>
          <div className='flex justify-center rounded-full'>
            <img height="200px" width="200px" className='rounded-full' src={image6} ></img>
          </div>
          <div className='flex justify-center text-3xl font-bold text-purple-900' >

            <p>Hello</p>
          </div>
          <div className='flex justify-center text-lg px-10' >
            <p>I am a Web Developer. Currently, I'm a 3rd year CSE student in Sathyabama University, Chennai.</p>
          </div>
        </div>
      </div>


      
      <div className='flex  justify-center items-center '>
      {/* <hr size="3"></hr> */}
      <div className=' border  w-6/12 divide-x-8  border-purple-700 border-dotted custom-border'>

      </div>
      </div>


      <div className="">
        <div className='md:flex justify-center'>
          <div>
              <img src={image4}></img>
          </div>
          <div className='flex justify-center items-center font-bold text-7xl'>
              <p>designer</p>
          </div>
        </div>
      </div>

      <div className='lg-py-0 py-10'>
        <div className='md:flex justify-center'>
          <div className='flex justify-center items-center'>
          <div className='md:block hidden  font-bold text-7xl'>
              <p>{"<coder/>"}</p>
          </div></div>
          <div>
              <img src={image2}></img>
          </div>
          <div className='md:hidden flex justify-center items-center font-bold text-7xl'>
              <p>{"<coder/>"}</p>
          </div>
        </div>
      </div>



  




      <div className='pt-10 pb-10 bg-black text-purple-600'>
        <div className='flex items-center'>
          <div className='md:text-8xl text-6xl cursor-pointer' onClick={handlePrevProject}>
            <RiArrowLeftSLine />
          </div>
          <div className='flex-col space-y-6 justify-center items-center'>
            <div className='flex justify-center items-center text-2xl'>
              <p>{projects[count].name}</p>
            </div>
            <div className='flex justify-center items-center px-10'>
              <img src={projects[count].image} alt={projects[count].name} />
            </div>
            <div className='flex justify-center items-center'>
              <button className='py-2 px-4 text-xl bg-purple-700 text-black rounded-xl'>
                <a href={projects[count].url}>Open</a>
              </button>
            </div>
          </div>
          <div className='md:text-8xl text-6xl cursor-pointer' onClick={handleNextProject}>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>









      <div className='py-20'>
        <div className='flex-col space-y-8'>
          <div className='flex justify-center items-center text-purple-700 font-bold text-4xl'>
            <p>Get In Touch</p>
          </div>
          <div className='flex justify-center items-center px-10 text-lg'>
            <p>Feel free to reach out to me at GEDDADAVENKATAPRADEEP@GMAIL.COM or connect with me on WhatsApp number +91 7416320648. I'd love to hear from you and discuss any opportunities or collaborations!</p>
          </div>
          <div className='flex justify-center items-center'>
            <button className='py-2 px-4 text-xl bg-purple-700 text-black rounded-xl'><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">Contact Me</a></button>
          </div>
        </div>
      </div>













      <div className="py-5 md:py-10 bg-black text-purple-600 lg:px-32 border-t-2 rounded-t-xl">

        <div className="md:flex space-y-2 md:justify-between justify-center items-center">
          <div className="text-3xl flex justify-center  font-semibold md:font-bold">G. V Pradeep</div>
          <div className="font-semibold flex justify-center ">Copyrights © 2023</div>
          <div className="flex justify-center space-x-2 lg:space-x-4 text-xl">
            <a href="https://www.linkedin.com/in/pradeep-pradeep-1bbb3521a/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Pradeep1G/">
              <BsGithub />
            </a>
            <a href="https://www.hackerrank.com/geddadavenkatap1">
              <FaHackerrank />
            </a>
            <a href="https://www.instagram.com/venkatapradeep.g/">
              <RiInstagramFill />
            </a>
          </div>
        </div>
      </div>



    </>
  )
}

export default App
