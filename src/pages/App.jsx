import logo from '../logo.svg';
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Host from './Host'
import Question from './Question';
import Besoin from './Besoins';
import Profil from './Profil';
import Error from './Error';
import Freelance from './Freelance';
import Shame from './Shame';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Host />}/>
      <Route path='/question' element={<Question />}/>
      <Route path='/besoin' element={<Besoin />}/>
      <Route path='/profils' element={<Profil />}/>
      <Route path='/error' element={<Error />}/>
      <Route path='/freelance' element={<Freelance />}/>
      <Route path='/dommage' element={<Shame />}/>
    </Routes>
  );
}

export default App;
