
import React from "react"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./components/site/Home"
import StackedLayout from "./components/site/StackedLayout"
import DashboardLayout from "./components/teton/Layout"
import Alerts from "./pages/Alerts"
import Buttons from "./pages/Buttons"
import ButtonGroups from "./pages/ButtonGroups"
import GridsPage from "./pages/GridsPage"
import StacksPage from "./pages/StacksPage"
import BadgesPage from "./pages/BadgesPage"
import FormsPage from "./pages/FormsPage"
import CardsPage from "./pages/CardsPage"
import ComposerPage from "./pages/ComposerPage"
import PagerPage from "./pages/PagerPage"
import { default as TetonHeader } from "./components/teton/Header"

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ 
          <StackedLayout main={<Home/>} />
        }/> 
        <Route path="/layout/grid" element={  
          <> 
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<GridsPage/>}              
            />
            <ScrollToTop/>
          </>
        }/>  
        <Route path="/layout/stack" element={   
          <>
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<StacksPage/>}   
            />
            <ScrollToTop/>
          </>
        }/>  
        <Route path="/components/alerts" element={
          <>        
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<Alerts />} 
            />
            <ScrollToTop/>
          </>
        }/> 
        <Route path="/components/cards" element={    
          <>    
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<CardsPage />} 
            />
            <ScrollToTop/>
          </>
        }/> 
        <Route path="/components/badges" element={   
          <>     
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<BadgesPage />} 
            />
            <ScrollToTop/>
          </>
        }/> 
        <Route path="/components/buttons" element={  
          <>      
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<Buttons />} 
            />
            <ScrollToTop/>
          </>
        }/> 
        <Route path="/components/button-groups" element={    
          <>    
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<ButtonGroups />} 
            />
            <ScrollToTop/>
          </>
        }/>  
        <Route path="/components/forms" element={  
          <>      
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<FormsPage />} 
            />
            <ScrollToTop/>
          </>
        }/>  
        <Route path="/examples/composer" element={   
          <>     
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<ComposerPage />} 
            />
            <ScrollToTop/>
          </>
        }/> 
        <Route path="/examples/pager" element={ 
          <>      
            <DashboardLayout 
              header={<TetonHeader/>}
              main={<PagerPage />} 
            />
            <ScrollToTop/>
          </>
        }/>     
      </Routes>
    </HashRouter>
  )
}
