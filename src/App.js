
import React from "react"
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

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={ 
          <StackedLayout main={<Home/>} />
        }/> 
        <Route path="/layout/grid" element={   
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<GridsPage/>}              
          />
        }/>  
        <Route path="/layout/stack" element={   
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<StacksPage/>}   
          />
        }/>  
        <Route path="/components/alerts" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<Alerts />} 
          />
        }/> 
        <Route path="/components/cards" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<CardsPage />} 
          />
        }/> 
        <Route path="/components/badges" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<BadgesPage />} 
          />
        }/> 
        <Route path="/components/buttons" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<Buttons />} 
          />
        }/> 
        <Route path="/components/button-groups" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<ButtonGroups />} 
          />
        }/>  
        <Route path="/components/forms" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<FormsPage />} 
          />
        }/>  
        <Route path="/examples/composer" element={        
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<ComposerPage />} 
          />
        }/> 
        <Route path="/examples/pager" element={       
          <DashboardLayout 
            header={<TetonHeader/>}
            main={<PagerPage />} 
          />
        }/>     
      </Routes>
    </HashRouter>
  )
}
