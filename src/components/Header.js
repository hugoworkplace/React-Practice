import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color={showAdd ? 'green' : 'red'}
                text={showAdd ? 'add' : 'close'}
                onClick={onAdd}></Button>
        </header>
    )
}

export default Header
