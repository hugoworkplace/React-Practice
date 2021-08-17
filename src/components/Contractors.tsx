import Contractor from './Contractor'

interface IContractor {
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
}

interface IContractorsProps{
    contractors:IContractor[]
    onDelete:(id:string)=>void
}

const Contractors: React.FC<IContractorsProps> = ({contractors, onDelete}) => {
    

    return (
        <>
            {contractors.map((contractor) => (
                <Contractor key={contractor.id} contractor={contractor} onDelete={onDelete}/>
            ))}
        </>
    )
}


export default Contractors

