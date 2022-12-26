import React, {Fragment} from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ExclamationIcon } from '@heroicons/react/outline'
import { LinkIcon, PlusSmIcon, QuestionMarkCircleIcon, BellIcon, SwitchHorizontalIcon, SwitchVerticalIcon, DotsHorizontalIcon, ChevronDownIcon} from '@heroicons/react/solid'

import Card from '../components/teton/Card'

import Showcase from '../components/site/Showcase'

function CardsPage() {
  return (
    <span>
      <span class='prose'>  
        <h1>Cards</h1>
        <p>Custom cards to quickly highlight important information.</p>
        <h2>Examples</h2>
        <p>Use any of the available variant style types to quickly create a styled card. Just modify the variant prop.</p>
      </span>
      <br/>      
      <Showcase 
        class="w-full p-4 m-auto space-y-2" // fix this...
        component={
          <>  
            <Card>
              <h3 class="text-lg font-medium">
                Default
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card> 
            <Card variant="primary">
              <h3 class="text-lg font-medium">
                Primary
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card>
            <Card variant="secondary">
              <h3 class="text-lg font-medium">
                Secondary
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card> 
            <Card variant="success">
              <h3 class="text-lg font-medium">
                Success
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card>
            <Card variant="warning">
              <h3 class="text-lg font-medium">
                Warning
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card>
            <Card variant="danger">
              <h3 class="text-lg font-medium">
                Danger
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card>
            <Card variant="info">
              <h3 class="text-lg font-medium">
                Info
              </h3>
              <p class="mt-2 text-sm opacity-80">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
              </p>
            </Card>
          </>
        } 
        syntaxBlock={
            `<Card \n` +
            `  variant="primary" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Primary' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` + 
            `<Card \n` +
            `  variant="secondary" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Secondary' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` + 
            `<Card \n` +
            `  variant="success" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Success' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Card \n` + 
            `  variant="warning" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Warning' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Card \n` + 
            `  variant="danger" \n` +
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Danger' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/> \n` +
            `<Card \n` +
            `  variant="info" \n` + 
            `  icon={<ExclamationIcon/>} \n` +
            `  text='Info' \n` +
            `  subtext={["Something needs your attention. ", <a href="/" className="underline">Check it out!</a>]} \n` +
            `/>`}
        title="Cards" 
      />
      <span class='prose'>  
        <h2>API</h2>
        <h3>Card</h3>
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
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">text</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert text</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">subText</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">string</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">""</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets alert sub text</td>
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

export default CardsPage;