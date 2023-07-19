

import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemList/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import {BrowserRouter,Routes , Route} from "react-router-dom"

function App() {
  return (
    
    <div>
   <BrowserRouter> 
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemDetailContainer/>}/>
      <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<h1>404 not found</h1>}/>
    </Routes>
   </BrowserRouter>
   </div>
    

    
  );
}

export default App;
