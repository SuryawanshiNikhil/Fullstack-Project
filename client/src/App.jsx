import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import { Contact } from "./pages/Contact"
import { Service } from "./pages/Service"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Navbar } from "../component/Navbar"
import { Error } from "./pages/Error"
import { Logout } from "./pages/Logout"
import { Adminlayout } from "../component/layout/Admin-Layout"
import { Adminusers } from "./pages/Admin-user"
import { Admincontact } from "./pages/Admin-contact"
import { AdminUpdate } from "./pages/Admin-update"
const App=()=>{
  return (
  <>
  <BrowserRouter>
  <Navbar/>
 <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="*" element={<Error/>}/>
<Route path="/Admin" element={<Adminlayout/>}>
  <Route path="users" element={<Adminusers/>}/>
  <Route path="contact" element={<Admincontact/>}/>
  <Route path="users/:id/edit" element={<AdminUpdate/>}/>
</Route>
 </Routes>
  </BrowserRouter>
  </>
)
}
export default App;