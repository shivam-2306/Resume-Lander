import JobPosted from '../JobPosted/JobPosted';
import './TrackApplications.scss' 
import React from 'react'

const TrackApplications =  ({ data }) => {
    
      const { companyName, shortDesc, jobs } = data; 
      console.log(data);
      // data structure
      /* data : {
        "companyName": "Microsoft",
        "shortDesc": "loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem",
        "jobs" : [
            {
                "name": "MERN Stack",
                "jobType": "Full Time",
                "skills" : "Reactjs, nodejs, mern stack, frontend, backend"
            },
          } */
        console.log({companyName});
      return (
        // <div className="container-lg py-2">
        //   <div className="row">
        //     <div className="col-sm-2">
        //       {/* <img src={bot} className="w-100 h-100" /> */}
        //     </div>
        //     <div className="col-sm-10">
        //       <h2>{companyName}</h2>
        //       <p className="fst-italic">{shortDesc}</p>
        //     </div>
        //     <hr className="my-2" />
        //     <div className="row mt-2 ps-4">
        //       <h2>Job Openings</h2>
        //       {jobs.map((job) => (
        //         <JobSection job={job} key={job.name} />
        //       ))}
        //     </div>
        //   </div>
        // </div>
           <div className="container">
            <div className="row">
              <div className="topsection">
                <h1>{companyName}</h1>
                <p>{shortDesc}</p>
              </div>
              <hr/>
              <div className="joblisting">
                 <h2>
                  Job Openings
                 </h2>
                 {jobs.map((job) => (
                 <JobPosted job={job} key={job.name} />
               ))}
              </div>
            </div>
           </div>
      );
    };
    
    

export default TrackApplications
