import "./Home.scss";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CallIcon from '@mui/icons-material/Call';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RestoreIcon from '@mui/icons-material/Restore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const Home = ( ) => {

  return (
    <div className="homemain">
      <Sidebar/>
      <div className="home">
        <Navbar/>
        <div className="home-center">
      <div className="cards">
     <div className="linecard"> 
        <Link to="/addstore" style={{ textDecoration: 'none' }}><div className="cardstore"><AddBusinessIcon  className="iconcard"/><div className="titlecard"><div>Add</div><div>Store</div> </div></div></Link>
        <Link to="/addstore" style={{ textDecoration: 'none' }}> <div className="cardvehicule"><LocalShippingIcon className="iconcard"/><div className="titlecard"><div>Purchase</div><div>Orders</div></div></div></Link>
     </div>
       <div className="linecard">
       <Link to="/addstore" style={{ textDecoration: 'none' }}><div className="cardinvetory"><InventoryIcon className="iconcard"/><div className="titlecard">Inventory</div></div></Link>
       <Link to="/addstore" style={{ textDecoration: 'none' }}>  <div className="cardadd"><AddCircleOutlineIcon className="iconcard"/><div className="titlecard"><div>Add</div><div>Order</div></div></div></Link>
       </div>
       <div className="linecardend">
       <Link to="/addstore" style={{ textDecoration: 'none' }}>  <div className="cardhistory"><RestoreIcon className="iconcard"/><div className="titlecard"><div>Invoice</div><div>History</div> </div></div></Link>
       <Link to="/addstore" style={{ textDecoration: 'none' }}>  <div className="cardscan"><CropFreeIcon className="iconcard"/><div className="titlecard"><div>Scan</div><div>Code</div> </div></div></Link>
       </div>
    
      </div>
      </div>
      </div>

    </div>
  );
};

export default Home;
