import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import PreviousMeetups from '../components/previousMeetups/PreviousMeetups';

const App = () => {
    return (
        <section className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-no-repeat bg-cover overflow-x-hidden h-screen '>
            <Navbar />
            <PreviousMeetups />
            <div className="h-48 lg:h-24 sm:h-20" />
            <Footer />
        </section>
    );
};

export default App;