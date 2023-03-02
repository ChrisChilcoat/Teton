import React from 'react'

import Composer from '../components/teton/custom/Composer'
import Showcase from '../components/site/Showcase'

function ComposerPage() {
  return (
    <span>
      <span className='prose'>  
        <h1>Composer</h1>
        <p>Use any combination base <strong>Layouts</strong> and <strong>Components</strong> to create your own custom components.</p>
      </span>
      <br/>      
      <Showcase 
        className="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Composer/>
          </>
        } 
        syntaxBlock={       
          `import React from "react"; \n` +
          `\n` +
          `import Card from 'teton/components/Card'; \n` +
          `import Stack from 'teton/components/Stack'; \n` +
          `import Button from 'teton/components/Button'; \n` +
          `\n` +
          `function Composer( props ) { \n` +
          `  return ( \n` +
          `    <div> \n` +
          `      <section aria-label="Create a post"> \n` +
          `        <Card> \n` +
          `          <h3 className="sr-only">Create a post</h3> \n` +
          `          <Stack stretch="last">  \n` +
          `            <div> \n` +
          `              <Button variant="dark" size="md" rounded suffixClasses="overflow-hidden">  \n` +
          `                <span className="sr-only">User Profile</span>  \n` +
          `                <img src="https://avatars0.githubusercontent.com/u/39002455?v=4" aria-hidden="true" alt="touha98" className="object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out"></img>  \n` +
          `              </Button> \n` +
          `            </div>  \n` +
          `            <div> \n` +
          `              <Button variant="outline-light" justify="left" text="What's on your mind, Chris?" rounded block /> \n` +
          `            </div>  \n` +
          `          </Stack>  \n` +
          `          <div className="border-t border-black-400 pt-3 mt-3"> \n` +
          `            <Stack> \n` +
          `              <div> \n` +
          `                <Button variant="light" text="Go Live" rounded block /> \n` +
          `              </div> \n` +
          `              <div> \n` +
          `                <Button variant="light" text="Photo/Video" rounded block /> \n` +
          `              </div> \n` +
          `              <div> \n` +
          `                <Button variant="light" text="Feeling/Activity" rounded block /> \n` +
          `              </div> \n` +
          `            </Stack> \n` +
          `          </div> \n` +
          `        </Card> \n` +
          `      </section> \n` + 
          `    </div> \n` +
          `  ); \n` +
          `}; \n` +
          `\n` +
          `export default Composer; \n`
        }
        title="Custom Composer Widget" 
      />
    </span>
  )
}

export default ComposerPage;