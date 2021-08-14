import { FaTimes } from 'react-icons/fa'

const Contractor = ({ contractor, onDelete}) => {
    return (
        <div className='contractor'>
            <h3>
                {contractor.fname} {contractor.lname}
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(contractor.id)} />
            </h3>
        </div>
    )
}

export default Contractor
