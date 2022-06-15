import { useState } from 'react';
import Head from './Head';
import Header from './Header';
import Main from './Main';
import Footer from './footer';
import ReportTable from './ReportTable';






function CookieStandAdmin() {


    const [newCookieStand, setNewCookieStand] = useState([]);
    const [counter, setCounter] = useState(0);
    const formhandler = (e) => {
        e.preventDefault();


        const data = {
            location: e.target.location.value,
            minCust: e.target.minCust.value,
            maxCust: e.target.maxCust.value,
            avgCookies: e.target.avgCookies.value

        }
        setNewCookieStand([...newCookieStand, data]);
        
        setCounter(counter + 1);


    }
    console.log(newCookieStand);
    

    return (
        <>


            <Head />
            <Header />
            <Main formhandler={formhandler} />
            <ReportTable data={newCookieStand} />


            <Footer counter={counter} />


        </>
    )
}

export default CookieStandAdmin;