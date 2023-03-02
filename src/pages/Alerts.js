import React, {Fragment} from 'react'

//import { Button } from '@chrischilcoat/template-react-component-library'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ExclamationIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon, BellIcon, SwitchHorizontalIcon, SwitchVerticalIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'


import Alert from '../components/teton/Alert'

import Showcase from '../components/site/Showcase'

function Alerts() {
  return (
    <span>
      <span className='prose'>  
        <h1>Alerts </h1>
        <p>Custom alerts to quickly grab the users attention.</p>
        <h2>Examples</h2>
        <p>Use any of the available alert style types to quickly create a styled alert. Just modify the variant prop.</p>
      </span>
      <br/>      
      <Showcase 
        className="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Alert 
              variant="primary" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Primary</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="secondary" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Secondary</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="success" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Success</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="warning" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Warning</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="danger" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Danger</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="info" 
              icon={<ExclamationIcon/>}
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Info</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
          </>
        } 
        syntaxBlock={
          `<Alert  \n` +
          `  variant="primary"  \n` +
          `  icon={<ExclamationIcon/>} \n` +
          `> \n` +
          `  <div className="font-bold text-black font-lg dark:text-gray-300">Primary</div> \n` +
          `  <div className="text-gray-500 font-sm dark:text-gray-400"> \n` +
          `    Something needs your attention. <a href="/" className="underline">Check it out!</a>  \n` +
          `  </div> \n` +
          `</Alert> \n` +
          `<Alert  \n` +
          `  variant="secondary"  \n` +
          `  icon={<ExclamationIcon/>} \n` +
          `> \n` +
          `  <div className="font-bold text-black font-lg dark:text-gray-300">Secondary</div> \n` +
          `  <div className="text-gray-500 font-sm dark:text-gray-400"> \n` +
          `    Something needs your attention. <a href="/" className="underline">Check it out!</a>  \n` +
          `  </div> \n` +
          `</Alert> `}
        title="Alerts" 
      />
      <span className='prose'>  
        <h2>Dismissable</h2>
        <p>Make your alerts dismissable by adding the dismissable prop.</p>
      </span>
      <br/>
      <Showcase 
        className="w-full p-4 text-center m-auto space-y-2" // fix this...
        component={
          <>   
            <Alert 
              variant="primary" 
              icon={<ExclamationIcon/>}
              dismissable
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Primary</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
            <Alert 
              variant="secondary" 
              icon={<ExclamationIcon/>}
              dismissable
            >
              <div className="font-bold text-black font-lg dark:text-gray-300">Secondary</div>
              <div className="text-gray-500 font-sm dark:text-gray-400">
                Something needs your attention. <a href="/" className="underline">Check it out!</a> 
              </div>
            </Alert>
          </>
        } 
        syntaxBlock={
          `<Alert  \n` +
          `  variant="primary"  \n` +
          `  icon={<ExclamationIcon/>} \n` +
          `  dismissable \n` +
          `> \n` +
          `  <div className="font-bold text-black font-lg dark:text-gray-300">Primary</div> \n` +
          `  <div className="text-gray-500 font-sm dark:text-gray-400"> \n` +
          `    Something needs your attention. <a href="/" className="underline">Check it out!</a>  \n` +
          `  </div> \n` +
          `</Alert> \n` +
          `<Alert  \n` +
          `  variant="secondary"  \n` +
          `  icon={<ExclamationIcon/>} \n` +
          `  dismissable \n` +
          `> \n` +
          `  <div className="font-bold text-black font-lg dark:text-gray-300">Secondary</div> \n` +
          `  <div className="text-gray-500 font-sm dark:text-gray-400"> \n` +
          `    Something needs your attention. <a href="/" className="underline">Check it out!</a>  \n` +
          `  </div> \n` +
          `</Alert> `}
        title="Dismissable alerts" 
      />
     
      <span className='prose'>  
        <h2>API</h2>
        <h3>Alert</h3>
      </span>

      <div className="flex flex-col my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Default
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">dismissable</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">bool</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">false</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Make alerts dismissable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">icon</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">object</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">null</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets a primary icon</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">variant</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'primary' <br/> 'secondary' <br/> 'success' <br/> 'danger' <br/> 'warning' <br/> 'info' </td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'secondary'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert color</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Alerts;