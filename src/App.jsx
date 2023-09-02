import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const greeting = "Welcome to SmokingStore!"

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App