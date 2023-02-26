import Card from '../components/teton/Card'
import Stack from '../components/teton/Stack'
import Showcase from '../components/site/Showcase'
import Container from '../components/teton/Container'
import Row from '../components/teton/Row'
import Col from '../components/teton/Col'
import arizona from '../images/Arizone.jpg'
import lake from '../images/lake.jpg'
import landscape from '../images/landscape.jpg'

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
          `<Card> \n` +
          `  <h3 class="text-lg font-medium">Default</h3> \n` +
          `  <p class="mt-2 text-sm opacity-80">Doloribus dolores nostrum...</p> \n` +
          `</Card>  \n` +   
          `<Card variant="primary"> \n` +
          `  <h3 class="text-lg font-medium">Primary</h3> \n` +
          `  <p class="mt-2 text-sm opacity-80">Doloribus dolores nostrum...</p> \n` +
          `</Card>`}
        title="Cards" 
      />
      <span class='prose'>  
        <h2>Aspect Ratios</h2>
        <p>Quickly change the default aspect ratio of your card by using the AspectRatio option.</p>
      </span>
      <br/>      
      <Showcase 
        class="w-full py-4 m-auto space-y-2" // fix this...
        component={
          <Container>
            <Row cols="3">
              <Col>
                <Card size="xxl" aspectRatio='OneByFour'>
                  <h3 class="text-lg font-medium">
                    One By Four
                  </h3>
                  <p class="mt-2 text-sm opacity-80">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
              <Col>
                <Card size="xxl" aspectRatio='oneByOne'>
                  <h3 class="text-lg font-medium">
                    One By One
                  </h3>
                  <p class="mt-2 text-sm opacity-80">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
              <Col>
                <Card size="xxl" aspectRatio='threeByFour'>
                  <h3 class="text-lg font-medium">
                    Three By Four
                  </h3>
                  <p class="mt-2 text-sm opacity-80">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
            </Row>
          </Container>
        } 
        syntaxBlock={
          `<Card aspectRatio='OneByFour'> \n` +
          `  ...  \n` +
          `</Card> \n` + 
          `<Card aspectRatio='oneByOne'> \n` +
          `  ...  \n` +
          `</Card> \n` + 
          `<Card aspectRatio='threeByFour'> \n` +
          `  ...  \n` +
          `</Card>` 
        }
        title="Cards with Aspect Ratios" 
      />

<span class='prose'>  
        <h2>Background Images</h2>
        <p>Pass a background image to a card using the backgroundImg option.</p>
      </span>
      <br/>      
      <Showcase 
        class="w-full py-4 m-auto space-y-2" // fix this...
        component={
          <Container>
            <Row cols="3">
              <Col>
                <Card size="xxl" aspectRatio='threeByFour' backgroundImg={arizona}>
                  <h3 class="text-lg font-medium text-white">
                    Headline
                  </h3>
                  <p class="mt-2 text-sm opacity-80 text-white">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
              <Col>
                <Card size="xxl" aspectRatio='threeByFour' backgroundImg={lake}>
                  <h3 class="text-lg font-medium text-white">
                    Headline
                  </h3>
                  <p class="mt-2 text-sm opacity-80 text-white">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
              <Col>
                <Card size="xxl" aspectRatio='threeByFour' backgroundImg={'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply'}>
                  <h3 class="text-lg font-medium text-white">
                    Headline
                  </h3>
                  <p class="mt-2 text-sm opacity-80 text-white">
                    Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                  </p>
                </Card> 
              </Col>
            </Row>
          </Container>
        } 
        syntaxBlock={
          `import landscape from '../images/landscape.jpg'; \n` +
          `  \n` +
          `<Card size="xxl" aspectRatio='threeByFour' backgroundImg={landscape} \n` +
          `  <h3 class="text-lg font-medium text-white">Headline</h3  \n` +
          `  <p class="mt-2 text-sm opacity-80 text-white">Doloribus dolores nostrum...</p \n` +
          `</Card>`} 
        title="Cards with Background Images" 
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
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">aspectRatio</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'none'<br/> 'oneByOne'<br/> 'fiveByFour'<br/> 'fourByThree'<br/> 'threeByTwo'<br/> 'fiveByThree'<br/> 'sixteenByNine'<br/> 'threeByOne'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'none'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets an aspect ratio</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">backgroundImg</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Object</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'none'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets a background image</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap">Size</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'xxs' <br/> 'xs' <br/>'sm' <br/> 'md' <br/>'lg' <br/> 'xl' <br/> 'xxl' <br/></td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">'md'</td>
                    <td className="px-6 py-2 text-sm text-gray-500 whitespace-nowrap">Sets card padding</td>
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