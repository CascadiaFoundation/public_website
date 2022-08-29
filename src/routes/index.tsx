import {
  Routes,
  Route
} from 'react-router-dom';

import Home from '../pages/home';
import Learning from '../pages/learning';
import Ecosystem from '../pages/ecosystem';
import ESG from '../pages/esg';
import Community from '../pages/community';
import Blog from '../pages/blog';
import Faucet from '../pages/faucet';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/learning' element={<Learning />}/>
      <Route path='/ecosystem' element={<Ecosystem />}/>
      <Route path='/esg' element={<ESG />}/>
      <Route path='/community' element={<Community />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/faucet' element={<Faucet />}/>
      <Route path='/' element={<Home />}/>      
    </Routes>
  );
};

export default AppRouter;