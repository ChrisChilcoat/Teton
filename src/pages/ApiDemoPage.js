import React from 'react'

import ApiDemo from '../components/teton/custom/ApiDemo'
import Showcase from '../components/site/Showcase'

function ApiDemoPage() {
  return (
    <span>
      <span className='prose'>  
        <h1>Api Demo</h1>
        <p>Pull data from an easy to use api.</p>
      </span>
      <br/>      
      <Showcase 
        className="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <ApiDemo/>
          </>
        }
        title="api"
      /> 
    </span>
  )
}

export default ApiDemoPage;