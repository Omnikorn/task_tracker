import Button from "./Button"

const Header = ({onAdd}) => {


  return (
    <header className="header">
        <h1>TASK TRACKER</h1>
        <Button color="green" text="ADD" onClick={onAdd}/>
    </header>
  )
}

export default Header