import Header from "./components/Header";
import Contractors from './components/Contractors';
import AddContractor from "./components/AddContractor";
import { useState } from 'react'



const App = () => {
  const [showAdd, setShowAdd] = useState('false');
  const [contractors, setContractors] = useState([
    {
      id: 1,
      fname: 'Forrest',
      lname: 'Row',
      phone: '+61 430 024 501',
      email: 'bx.cc20e@docsw.site',
    },
    {
      id: 2,
      fname: 'Rocky',
      lname: 'Ballard',
      phone: '+61 404 871 952',
      email: 'jdon.saif.584@bulegoblog.com',
    },
    {
      id: 3,
      fname: 'Neil',
      lname: 'Read',
      phone: '+61 450 436 571',
      email: 'dagimanunesz@codw.site',
    },
    {
      id: 4,
      fname: 'Alex',
      lname: 'Hudson',
      phone: '+61 493 209 777',
      email: 'ganti.ana@billseo.com',
    },
    {
      id: 5,
      fname: 'Gavin',
      lname: 'Pope',
      phone: '+61 431 460 549',
      email: 'kle.na555x@king.buzz',
    },
  ]);

  const addContractor = (contractor) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newContractor = { id, ...contractor }
    setContractors([...contractors, newContractor])
  }

  const onDelete = (id) => {
    setContractors(contractors.filter((contractor) => contractor.id !== id))
  }


  return (
    <div className="container">
      <Header title="Hello" onAdd={() => setShowAdd(!showAdd)} onShowAdd={showAdd}/>
      {showAdd && <AddContractor onAdd={addContractor} />}
      {contractors.length > 0 ?
        (<Contractors contractors={contractors} onDelete={onDelete} />) :
        ('No contractor to show')}
    </div>
  );
}

export default App;
