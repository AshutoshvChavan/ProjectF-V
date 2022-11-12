import { Routes,Route } from "react-router-dom"
import { Home } from './Home';
import { Product } from './Product';
import { support } from './support';
import { Forums } from './Forums';
import { About } from './About';
import { Blocks } from './Blocks';
import { Sign } from './Sign';
import { GetStarted } from './GetStarted';
export const AllRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/product" element={<Product />} />
            <Route path="/support" element={<support  />} />
            <Route path="/Forums" element={<Forums  />} />
            <Route path="/About" element={<About  />} />
            <Route path="/Blocks" element={<Blocks />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/started" element={<GetStarted  />} />
        </Routes>
    )
}