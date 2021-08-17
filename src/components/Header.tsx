import Button from "./Button"

interface IHeaderProps{
    title:string
    onAdd:()=>void
    showAdd:boolean
}

const Header: React.FC<IHeaderProps> = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'close' : 'add'}
                onClick={onAdd}></Button>
        </header>
    )
}

export default Header
