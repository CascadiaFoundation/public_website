import {
  Routes,
  Route
} from 'react-router-dom';

import Home from '../pages/home';
import Ecosystem from '../pages/ecosystem';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/ecosystem' element={<Ecosystem />}/>
      <Route path='/' element={<Home />}/>
      {/* 
      <Route path='/security-recommendations' element={<SecurityRecommendations />}/>
      <Route path='/concentration' element={<Concentration />}/>
      <Route path='/:id' element={<ValidatorDetail />}/> */}
    </Routes>
  );
}

export default AppRouter;