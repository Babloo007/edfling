import './expertList.css';

import { Link } from 'react-router-dom';

function ExpertCard(props) {

  const expert = props.expert;

  // Add logic to format the expert's name if it's too long
  let displayName = expert.name;
  
  if (expert.name.length > 16) {
    displayName = expert.name.substring(0, 15) + "...";
  }


  return (
    <div className='expertCard'>
        <Link to={`/expert/${expert._id}`}>
          <div className='expertCardContainer'>
            <div className="expertImage"></div>
            <div>
              <h1 className='expertName' style={{ color: 'black' }}>{displayName}</h1>
              <p>{expert.role}</p>
              <p>Conversations: <b>1001</b></p>
            </div>
          </div>
          <div>
            <p><i className="fa-solid fa-calendar-days"></i> <b>Next Available Schedule:</b> {expert.next_available}</p>
            <p><i className="fa-solid fa-clock"></i> <b>Chat Schedule:</b> {expert.chat_schedule}</p>
          </div>
        </Link>
        
      <button className='expert-chat'>CHAT</button>
      <button className='expert-message'>MESSAGE</button>
      <button className='expert-appointment'>APPOINTMENT</button>
    </div>
  );
}

export default ExpertCard;