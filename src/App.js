import Header from "./components/Header";
import Contractors from './components/Contractors';
import AddContractor from "./components/AddContractor";
import { useState, useEffect } from 'react'



const App = () => {
  const [showAdd, setShowAdd] = useState('false');
  const [contractors, setContractors] = useState([]);

  useEffect(()=>{
    const getContractors = async () => {
      const contractorsFromServer = await fetchContractors()
      setContractors(contractorsFromServer)
    }
    getContractors()
  }, [])

  // Fetch contractors from server
  const fetchContractors = async () =>{
    const res = await fetch('https://hugoworkplace.xyz/api/contractors')
    const data = await res.json()
    return data
  }

  // Delete contractor on server
  const deleteContractor = async (id) => { 
    await fetch(`https://hugoworkplace.xyz/api/contractors${id}`,{method: 'DELETE'})
    setContractors(contractors.filter((contractor) => contractor.id !== id))
  }

  // Add a new contractor
  const addContractor = async (contractor) => {
    const res = await fetch('https://hugoworkplace.xyz/api/contractors',{
      method: 'POST',
      headers:{ 'Content-type':'application/json',},
      body: JSON.stringify(contractor),
    })

    const data = await res.json()
    console.log(data)
    console.log(contractor)
    setContractors([...contractors,data])

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newContractor = { id, ...contractor }
    // setContractors([...contractors, newContractor])
  }

  


  return (
    <div className="container">
      <Header title="Contractor List" onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd}/>
      {showAdd && <AddContractor onAdd={addContractor} />}
      {contractors.length > 0 ?
        (<Contractors contractors={contractors} onDelete={deleteContractor} />) :
        ('No contractor to show')}
    </div>
  );
}

export default App;
