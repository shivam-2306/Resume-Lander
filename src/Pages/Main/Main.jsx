import './Main.scss'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';

const Main = () => {
  const { role } = useParams();
  return <div>
      <section id="Home"><Navbar role={role} /><Home/> </section>
      
  </div>; 
};

export default Main;
