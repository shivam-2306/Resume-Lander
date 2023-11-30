import React from "react";
import {motion} from 'framer-motion'
import { useNavigate } from "react-router-dom";
import './JobPosted.scss'

const JobPosted = ({ job }) => {
  const navigate = useNavigate();
  const HandleApplyClick = ()=> {
    navigate('/trackapplications');
 }
  const { name, jobType, skills } = job;
  return (
    
    <motion.div class="card">
      <motion.div className="cardbody">
        <h3>{name}</h3>
        <hr/>
        <motion.div className="cardtext">
           <dl className="row">
              <span>Job Type: </span><span>{jobType}</span><br/>

              <span>Skills: </span>
                <span>{skills}</span>
            </dl>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                className="signup-btn"
                onClick={HandleApplyClick}
                 >
                Track
              </motion.button>
        </motion.div>
      </motion.div>
      </motion.div>
  );
};

export default JobPosted;