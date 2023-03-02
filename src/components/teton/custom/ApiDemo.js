import React, {useEffect, useState, createRef, reduce} from 'react'
import axios from "axios";
import TtDialog from "../Dialog";
import Stack from '../Stack';
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import Carousel from '../Carousel';
import { XIcon, HeartIcon, ShareIcon } from '@heroicons/react/outline';

const restURL = "https://jsonplaceholder.typicode.com/photos";

export default function ApiDemo() {
  const [data, setData] = useState([]);
  const [thumbRefs, setThumbRefs] = useState([]);
  const [dataRangeLow, setDataRangeLow ] = useState(0);
  const [dataRangeHigh, setDataRangeHigh ] = useState(10);
  const [error, setError] = useState(null);
  const [isloaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [carouselPos, setCarouselPos] = useState();
  const sidebar = createRef();
  
  useEffect(() => {    
    axios
      .get(restURL)
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setIsLoaded(true)
        }, "1000") 
      }).catch(error => {
        setError(error);
      });     
  }, []);


  const handleCloseDialog = () => setIsOpen(false);
  const handleOpenDialog = () => setIsOpen(true);
  const handleAppendThumbnails = () => setDataRangeHigh(dataRangeHigh + 10);
  const handleCenterThumbnail = postId => {
    const scrollTop = sidebar.current.scrollTop;
    const clientHeight = sidebar.current.clientHeight;
    const scrollHeight = sidebar.current.scrollHeight;
    
    console.log(postId)

  }

  const handleThumbnailVisibility = () => {
    const scrollTop = sidebar.current.scrollTop;
    const clientHeight = sidebar.current.clientHeight;
    const scrollHeight = sidebar.current.scrollHeight;

    //console.log(scrollTop);
    //console.log(clientHeight);
    //console.log(scrollHeight - clientHeight);

    scrollTop == (scrollHeight - clientHeight) && handleAppendThumbnails()

  }

  const handleSetCarouselPos = e => {
    const posId = e.target.dataset.pos ? parseInt(e.target.dataset.pos) : 0
    setCarouselPos(posId)
    handleCenterThumbnail(posId)

    console.log(thumbRefs[posId])

    e.stopPropagation();
  } 

  



  if (error) return `Error: ${error.message}`;

  return (
    <div>
      { isloaded ?
        <>
          <TtDialog isOpen={isOpen} setIsOpen={setIsOpen} fullScreen >
            <div className="border-b border-gray-300 pb-4">
              <Stack stretch="first" spacing="none"> 
                <div>
                  <ButtonGroup size="sm" variant="outline_light">
                    <Button active text="Photos" />
                    <Button text="Street View" />
                  </ButtonGroup>
                </div> 
                <div>
                  <Button size="sm" variant="light" icon={<HeartIcon/>} text="Favorite" />
                </div>
                <div>
                  <Button size="sm"  variant="light" icon={<ShareIcon/>} text="share" />
                </div>
                <div>
                  <Button size="sm" onClick={handleCloseDialog} variant="outline_light" rounded icon={<XIcon/>} suffixClasses="ml-2">
                    <span className="sr-only">Close Dialog</span> 
                  </Button>
                </div> 
              </Stack> 
            </div>
            <div className="flex h-full relative">
                <Stack stretch="last"> 
                  <div className='w-[300px] relative'>
                    <div ref={sidebar} onScroll={handleThumbnailVisibility} className="overflow-y-scroll h-full relative border-r pr-4 pb-10">
                      {data.slice(dataRangeLow, dataRangeHigh).map((item, index) => (
                        <div key={index} className={(index % 3 ? "w-1/2 aspect-square p-1" : "w-full aspect-video p-1") + " inline-block"}>
                          <button
                            key={index + item.imageUrl}
                            type="button"
                            className={ 
                              (carouselPos === item.id - 1 ? " border-collapse border-red-500 border-4" : "bg-black ") + 
                              " w-full h-full rounded-md bg-opacity-20 relative overflow-hidden px-4 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"}
                          ><img 
                            src={item.thumbnailUrl} 
                            data-pos={item.id - 1} 
                            onClick={handleSetCarouselPos}
                            className='object-cover w-full h-full top-0 absolute bottom-0 left-0 right-0 hover:opacity-80 transition duration-300 ease-in-out' />
                          </button>
                        </div>
                      ))}   
                    </div>
                  </div> 
                  <div className="m-auto relative">
                    <div className="top-0 absolute bottom-0 left-0 right-0 flex" style={{top: '-28px'}}>
                      <div className="m-auto" style={{width: '85vh'}}>
                        <Carousel callback={setCarouselPos} slides={data} position={carouselPos} />
                      </div>
                    </div>  
                  </div> 
                </Stack> 
            </div>
          </TtDialog>
          <button
            type="button"
            onClick={handleOpenDialog}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open Dialog
          </button>
        </>
      :
        <p>loading...</p>
      }
    </div>
  );
}