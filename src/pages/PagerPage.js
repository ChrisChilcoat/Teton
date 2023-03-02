import React from 'react'

import Pager from '../components/teton/custom/Pager'
import Showcase from '../components/site/Showcase'

function PagerPage() {
  return (
    <span>
      <span className='prose'>  
        <h1>Pager</h1>
        <p>Use any combination base <strong>Layouts</strong> and <strong>Components</strong> to create your own custom components.</p>
      </span>
      <br/>      
      <Showcase 
        className="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Pager/>
          </>
        } 
        syntaxBlock={       
          `import React from "react"; \n` +
          ` \n` +
          `import Card from '../Card'; \n` +
          `import Button from '../Button'; \n` +
          ` \n` +
          `import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/outline'; \n` +
          ` \n` +
          `const people = [ \n` +
          `  { name: 'Leslie Alexander', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Dries Vincent', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Courtney Henry', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Michael Foster', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Lindsey Walton', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Tom Cook', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Whitney Francis', imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Leonard Krasner', imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Floyd Miles', imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Chelsea Hagon', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Angela Fisher', imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Carla Yates', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Leslie Johnson', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Francis Watson', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Tracey Palmer', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Alejandro Davidson', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Kirk Newton', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Evelyn Sherman', imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Dominic Cummings', imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Lora Park', imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Arturo Pena', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Allan Flores', imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Rose Wheeler', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Bradley Valdez', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Sabrina Mendez', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Darrel Watkins', imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Irvin Underwood', imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Kayla George', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `  { name: 'Phil Franklin', imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Todd Nunez', imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Hazel Farmer', imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'},  \n` +
          `  { name: 'Willie Yates', imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `  { name: 'Jenny Morton', imageUrl: 'https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'}, \n` +
          `] \n` +
          ` \n` +
          `function Pager() { \n` +
          `  const [showLeftBtn, setShowLeftBtn] = React.useState(false); \n` +
          `  const [showRightBtn, setShowRightBtn] = React.useState(true); \n` +
          `  const pager = React.createRef(); \n` +
          ` \n` +
          `  const scrollRight = () => { \n` +
          `    pager.current.scroll({ \n` +
          `      left: pager.current.scrollLeft + pager.current.clientWidth, \n` +
          `      behavior: 'smooth' \n` +
          `    }); \n` +
          `  }; \n` +
          ` \n` +
          `  const scrollLeft = () => {  \n` +
          `    pager.current.scroll({ \n` +
          `      left: pager.current.scrollLeft - pager.current.clientWidth, \n` +
          `      behavior: 'smooth' \n` +
          `    }); \n` +
          `  }; \n` +
          ` \n` +
          `  const setButtonState = () => { \n` +
          `    const currentScrollLeft = pager.current.scrollLeft; \n` +
          `    const totalWidth = pager.current.scrollWidth - pager.current.clientWidth; \n` +
          ` \n` +
          `    currentScrollLeft > 0 ? setShowLeftBtn(true) : setShowLeftBtn(false); \n` +
          `    totalWidth === currentScrollLeft ? setShowRightBtn(false) : setShowRightBtn(true); \n` +
          `  } \n` +
          ` \n` +
          `  const LeftBtn = () => ( \n` +
          `    <span className="absolute items-center hidden sm:inline-flex left-5 top-2"> \n` +
          `      <Button onClick={() => scrollLeft()} icon={<ChevronLeftIcon/>} iconSize="xl" variant="outline-light" size="lg" rounded> \n` +
          `        <span className="sr-only">Previous</span> \n` +
          `      </Button> \n` +
          `    </span> \n` +
          `  ) \n` +
          ` \n` +
          `  const RightBtn = () => ( \n` +
          `    <span className="absolute items-center hidden sm:inline-flex right-5 top-2"> \n` +
          `      <Button onClick={() => scrollRight()} icon={<ChevronRightIcon/>} iconSize="xl" variant="outline-light" size="lg" rounded> \n` +
          `        <span className="sr-only">Next</span> \n` +
          `      </Button> \n` +
          `    </span> \n` +
          `  ) \n` +
          ` \n` +
          `  return ( \n` +
          `    <section aria-label="Start a Video Chat" className="relative max-w-2xl mx-auto"> \n` +
          `      <Card size="xxs"> \n` +
          `        <h3 className="sr-only">Start a Video Chat</h3> \n` +  
          `        <div ref={pager} onScroll={setButtonState} className="w-full overflow-x-auto scrollbar-hide"> \n` +
          `          <div className="whitespace-nowrap pt-2.5 px-4 pb-3 space-x-2.5"> \n` +
          `            {people.map((person) => ( \n` +
          `              <Button variant="dark" size="md" rounded> \n` + 
          `                <span className="sr-only">{person.name}</span> \n` + 
          `                <img src={person.imageUrl} aria-hidden="true" alt="touha98" className="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out rounded-full"></img>  \n` +
          `                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" /> \n` +
          `              </Button> \n` +
          `            ))} \n` +
          `          </div> \n` +
          `        </div> \n` +
          `        {showLeftBtn ? <LeftBtn/> : null} \n` +
          `        {showRightBtn ? <RightBtn/> : null} \n` +
          `      </Card> \n` +
          `    </section>    \n` +
          `  ) \n` +
          `} \n` +
          ` \n` +
          `export default Pager; \n`
        }
        title="Custom Pager Widget" 
      />
    </span>
  )
}

export default PagerPage;