import PropTypes from 'prop-types'
import Contractor from './Contractor'


const Contractors = ({contractors, onDelete}) => {
    

    return (
        <>
            {contractors.map((contractor) => (
                <Contractor key={Contractor.id} contractor={contractor} onDelete={onDelete}/>
            ))}
        </>
    )
}

Contractors.propTypes = {

}

export default Contractors

