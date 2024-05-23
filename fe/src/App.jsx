

import Home from "./app/pages/home/home.view"
import Navbar from "./app/common/navbar/navbar.component";
// Constants

export const NavbarItems = [
  { label: "home", link:"home"},
  { label: "anfitrion", link:"anfitrion"},
  { label: "comensal", link:"comensal"}
]
const items = ['Item 1', 'Item 2', 'Item 3'];

function App() {
  
  return (
    <>
    <Navbar items={items} title={"title"}></Navbar>

   <Home></Home>
    </>
 
  );
}

export default App;
