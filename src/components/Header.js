import Button from "./Button"

const Header = () => {

const onClick =(e)=>{
    console.log(e)
}
  return (
    <header className="header">
        <h1>TASK TRACKER</h1>
        <Button color="green" text="ADD" onClick={onClick}/>
    </header>
  )
}

export default Header