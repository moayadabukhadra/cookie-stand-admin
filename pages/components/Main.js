import { useState } from "react";

function Main(){
    
    
    
        
    

    

function Form(){
    return (
        <>


    <main>
    <form className="w-3/4 h-48 mx-32 my-10 rounded-lg bg-emerald-300 " onSubmit={formhandler}>
    <h1 className="ml-10 text-2xl font-medium px-80">Create Cookie Stand</h1>
    <br/>
            <label className="mx-4" >Location <input type="text" className= "w-5/6 " name="location" id="location"/></label>
            <br/>
            <br/>

            <div className="flex justify-between">
                
            <div className="mx-4 ">
            <label  className="text-sm text-center">Minimum Custumers Per Hour </label>
            <input type="text" name="minCust"  id="minCust"/>
            </div>
            
            <div>
            <label  >Maximum Custumers Per Hour </label>
            
            <input type="text" className="w-56 " name="maxCust" id="maxCust" />
            </div>
            
            <div>
            <label>Average Cookies Per Sale</label>
            
            <input type="text" className="" name="avgCookies" id="avgCookies"/>

            
            
            </div>
            <div className="h-16 mr-6 bg-emerald-500 w-80">
            <button type="submit" className="mx-24 my-5 ">Create</button>

            </div>
            </div>

    </form>


    <p className= "px-32 ml-96">Report Table Coming Soon....</p>
    <div>

        
 
    </div>

        
    
    </main>




</>
    )
}   
const [newCookieStand, setNewCookieStand] = useState([]);
const formhandler = (e) => {
    e.preventDefault();
        const location = document.getElementById("location").value;
        const minCust = document.getElementById("minCust").value;
        const maxCust = document.getElementById("maxCust").value;
        const avgCookies = document.getElementById("avgCookies").value;
        console.log(location, minCust, maxCust, avgCookies);
        const newCookieStand = {
            location:location,
            minCustomer:minCust,
            maxCustomer:maxCust,
            avgCookies:avgCookies
        }
        console.log(newCookieStand);
        const data=JSON.stringify(newCookieStand);
        setNewCookieStand(data);
    }
    
        
       
        
return(
    <>
    
<Form/>
<br/>

<p className=" mx-80">
    {newCookieStand}
</p>
</>
) 
    
        }


   










export default Main;