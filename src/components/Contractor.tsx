import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { IconContext } from "react-icons";

interface Contractor {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
}
interface IContractorProps {
    contractor: Contractor
    onDelete: (id:string) => void
}
const Contractor: React.FC<IContractorProps> = ({ contractor, onDelete }) => {
    return (
        <div className='contractor'>
            <h3>
                {contractor.firstName} {contractor.lastName}
                {/* <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(contractor.id)} /> */}
                <IconContext.Provider value={{ style:{color: "red", cursor: 'pointer'} }}>
                    <div>
                        <FaTimes onClick={() => onDelete(contractor.id)}/>
                    </div>
                </IconContext.Provider>
            </h3>
            <p> {contractor.phone} </p>
            <p> {contractor.email}</p>
        </div>
    )
}

export default Contractor
