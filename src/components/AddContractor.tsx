import { useState } from "react"
import React from 'react'

interface Contractor {
    id?: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
}
interface IAddContractorProps{
    onAdd:(object:Contractor) => void
}


const AddContractor:React.FC<IAddContractorProps> = ({onAdd}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const onSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
        if(!firstName){
            alert('Please enter a First name')
        }
        if(!lastName){
            alert('Please enter a Last name')
        }
        if(!phone){
            alert('Please enter a phone number')
        }
        if(!email){
            alert('Please enter an email address')
        }
        onAdd({firstName,lastName,phone,email})

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' value={lastName} onChange={(e)=> setLastName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Phone</label>
                <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Email</label>
                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <input type='submit' value='Create New Contractor' className='btn btn-block'></input>
        </form>


    )
}

export default AddContractor
