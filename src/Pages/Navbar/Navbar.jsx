// Navbar.jsx
import './Navbar.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ role }) => {
  return (
    <div className="Navbar">
      <div className="wrapper">
      <Link to={`/main/${role}`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          ResumeLander
        </Link>
        <nav>
          {role === 'seeker' && (
            <ul>
    
                <Link to="/build-career" className="navbar-link">Build Career</Link>

    
                <Link to="/careerpage" className="navbar-link">New Openings</Link>
              
    
                <Link to="/your-applications" className="navbar-link">Your Applications</Link>
    
            </ul>
          )}
          {role === 'recruiter' && (
            <ul>
              
                <Link to="/post-job" className="navbar-link">Post A Job</Link>
              
              
                <Link to="/trackapplications" className="navbar-link">Track Openings</Link>
              
              
                <Link to="/jobform" className="navbar-link">Build Career Page</Link>
              
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
