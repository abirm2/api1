
   

import './App.css';
import Users from './UserList';
import {Routes,Route} from 'react-router-dom';
import Details from './details';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element={<Users/>} />
       <Route path='/details/:id' element={<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;