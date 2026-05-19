import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import RainWorld from './Pages/RainWorld';
import HollowKnight from './Pages/HollowKnight';
import Silksong from './Pages/Silksong';
import AHatInTime from './Pages/AHatInTime';
import Mewgenics from './Pages/Mewgenics';
import Ultrakill from './Pages/Ultrakill';
import Terraria from './Pages/Terraria';
import TheBindingOfIsaac from './Pages/BindingOfIsaac';
import Journey from './Pages/Journey';
import Blasphemous from './Pages/Blasphemous';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rain-world" element={<RainWorld />} />
                <Route path="/hollow-knight" element={<HollowKnight />} />
                <Route path="/silksong" element={<Silksong />} />
                <Route path="/a-hat-in-time" element={<AHatInTime />} />
                <Route path="/mewgenics" element={<Mewgenics/>} />
                <Route path="/ultrakill" element={<Ultrakill/>} />
                <Route path="/terraria" element={<Terraria/>} />
                <Route path="/the-binding-of-isaac" element={<TheBindingOfIsaac/>} />
                <Route path="/journey" element={<Journey/>} />
                <Route path="/blasphemous" element={<Blasphemous/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;