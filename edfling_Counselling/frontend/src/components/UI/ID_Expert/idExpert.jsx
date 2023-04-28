import './idExpert.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { fetchExpertByID } from '../../../service/api';


import Navbar from '../navbar/navbar';



const IdExpert = () => {

    const [expertData, setExpertData] = useState({});
    
    
    const { id } = useParams();
    
      
        useEffect(() => {
          const fetchExpert = async () => {
            let response = await fetchExpertByID(id);
            setExpertData(response);
          };
          fetchExpert();
        }, [id]);
        


    return (
        <div>
            <Navbar />
            <div className='outer-container'>
                <div className='info'>
                  <h1>{expertData.name}</h1>
                  <h3>{expertData.role}</h3>
                  <p>{expertData.about}</p>
                  <p><i className="fa-solid fa-clock"></i> Available on: <b>{expertData.chat_schedule}</b></p>
                  <button className='chat'>CHAT</button>
                  <button className='message'>MESSAGE</button>
                  <button className='appointment'>APPOINTMENT</button>
                </div>

                <div className='skill inner-container'>
                <h2><i class="fa-solid fa-sun"></i> Skills</h2>
                {expertData.skills && expertData.skills.map((skill, index) => (
                    <p key={index}>{skill}</p>
                ))}
                </div>
                <div className='summary inner-container'>
                  <h2><i class="fa-solid fa-file-lines"></i> Summary</h2>
                  <p>{expertData.summary}</p>
                </div>
                <div className='education inner-container'>
                <h2><i class="fa-solid fa-graduation-cap"></i> Education</h2>
                {expertData.education && expertData.education.map((education, index) => (
                    <p key={index}>- {education}</p>
                ))}
                </div>
                <div className='experience inner-container'>
                <h2><i class="fa-solid fa-briefcase"></i> Experience</h2>
                  {expertData.experience && expertData.experience.map((experience, index) => (
                      <p key={index}>- {experience}</p>
                  ))}
                </div>
            </div>
        </div>
    )
}

export default IdExpert;