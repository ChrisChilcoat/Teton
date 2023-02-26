import React, {Fragment, useState} from 'react'
import Showcase from '../components/site/Showcase'
import Carousel from '../components/teton/Carousel'

const images = [
  { imageDesc: 'Leslie Alexander', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { imageDesc: 'Dries Vincent', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { imageDesc: 'Courtney Henry', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
  { imageDesc: 'Michael Foster', url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'},
];

function CarouselPage() {
  const [startPos, setStartPos] = useState();

  const handleSetStartPos = e => {
    const posId = parseInt(e.target.dataset.pos);
    setStartPos(posId)
  } 

  const renderImageButtons = () => {
    return (
      images.map((item, index) => (
        <span key={index + item.imageDesc} className="cursor-pointer" data-pos={index} onClick={handleSetStartPos}>
          {index}
        </span>
      ))
    )
  }

  return (
    <span>
      <span class='prose'>  
        <h1>Carousel</h1>
        <p>Custom carousel component to quiclkly page through images.</p>
        <h2>Example</h2>
        <p>Use the <strong>slides</strong> prop to pass an images object to the carousel.</p>
      </span>
      <br/>      
      <Showcase 
        class="w-full m-auto space-y-2"
        component={
          <>  
            <Carousel slides={images} position={startPos} indicatorVariant='pill' />
          </>
        } 
        syntaxBlock={
          `const images = [ \n` + 
          ` { imageDesc: 'Leslie Alexander', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          ` { imageDesc: 'Dries Vincent', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          ` { imageDesc: 'Courtney Henry', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          ` { imageDesc: 'Michael Foster', url: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}, \n` +
          `] \n` +
          `<Carousel slides={images} />`
        }
        title="Carousel" 
      />
      <span class='prose'>  
        <h2>API</h2>
        <h3>Carousel</h3>
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
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">slides</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">object</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">[]</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Pass slides to carousel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">aspectRatio</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap"> 
                      'oneByOne' <br/>
                      'fiveByFour' <br/>
                      'fourByThree' <br/>
                      'threeByTwo' <br/>
                      'fiveByThree' <br/>
                      'sixteenByNine' <br/>
                      'threeByOne'
                    </td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'fiveByFour'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Pass slides to carousel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">startPos</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">number</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">0</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Set carousel start position</td>
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

export default CarouselPage;