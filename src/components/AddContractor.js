import { useState } from "react"



const AddContractor = ({onAdd}) => {
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!fname){
            alert('Please enter a First name')
        }
        if(!lname){
            alert('Please enter a Last name')
        }
        if(!phone){
            alert('Please enter a phone number')
        }
        if(!email){
            alert('Please enter an email address')
        }
        onAdd({fname,lname,phone,email})

    }
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' value={fname} onChange={(e)=> setFname(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' value={lname} onChange={(e)=> setLname(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Contractor' className='btn btn-block'></input>
        </form>


    )
}

export default AddContractor
