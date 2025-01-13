import '../Styles/AboutLanding.css';

export default function AboutLanding() {
    return (
        <div className="about-landing-section">
            <div className="main-container">
                <div className="about-image-wrapper">
                    <h1 className='about-heading'>About EasyRobotics</h1>
                    <img src="Images/about-top.jpg" alt="" />
                </div>
                <div className='about-landing-content'>
                    <p>Anders Kjempff and Henrik Vesterlund Sørensen are the people behind EasyRobotics. Together they have more than 50 years of experience in designing, developing and producing advanced machines for industrial applications.</p>
                    <p>In 2015 the idea was born for ProFeeder, a mobile and compact automated robot cell that can be mounted on a robot, enabling parts to be fed in and out of fully automatic CNC lathes and milling machines. The robot cell has a parts tray placed in a feeder. The tray contains the parts to be processed. When the processing is complete, the parts are removed from the robot cell and replaced with a new feeder with trays full of unprocessed parts. ProFeeder is delivered with two mobile drawers, allowing the change to happen fast and efficiently.</p>
                    <p>In order to put extra emphasis on the development of ProFeeder the company EasyRobotics was formed. Syddansk Innovation, SDTI and the tree owners are shareholders in EasyRobotics.</p>
                    <p>SDTI has been involved in the development of ProFeeder and has provided support on the strategy for the use of the robot and for programming of the routine in which parts are fed in and out of the CNC machines.</p>
                </div>
            </div>
        </div>
    );
}