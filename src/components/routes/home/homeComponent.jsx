import "../../Directory/DirectoryStyle.jsx";
import Directory from '../../Directory/Directory'
import { Outlet } from "react-router-dom";

const Home = () => { 
  return(
    <div>
      <Directory />
      <Outlet />
    </div>
  )   
}

export default Home;