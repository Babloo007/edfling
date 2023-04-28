import './homePage.css';

import image001 from '../../images/Group 1000003296.png';

const HomePage = () => {


    return(
        <div className='homePageSection'>
            <div>
            <h1 className='getHelp'>Get Help. Get Better.</h1>
            <p className='homePageSectionDescription'>No matter what's troubling you, get the support you need, right here, right now.</p>
            <button className='homeChatBtn'>Chat Now</button>
            <button className='homeAppointmentBtn'>Book Appointment</button>
            </div>
            <img className='image001' src={image001} alt="Edfling" />
        </div>
    )
}

export default HomePage;