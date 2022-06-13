import { useState } from "react";

function Main({ formhandler }) {








    function Form() {
        return (
            <>


                <main>
                    <form className="w-4/5 h-48 mx-32 my-10 rounded-lg bg-emerald-300" onSubmit={formhandler}>
                        <h1 className="ml-10 text-2xl font-medium px-80">Create Cookie Stand</h1>
                        <br />
                        <label className="mx-4" >Location <input type="text" className="w-5/6 " name="location" id="location" /></label>
                        <br />
                        <br />

                        <div className="flex justify-between">

                            <div className="w-56 px-4 mx-3 rounded-lg bg-emerald-200">
                                <label className="text-sm text-center">Minimum Custumers Per Hour </label>
                                <input type="text" name="minCust" id="minCust" />
                            </div>

                            <div className="w-56 px-3 mr-3 rounded-lg bg-emerald-200" >
                                <label className="text-sm" >Maximum Custumers Per Hour </label>

                                <input type="text" name="maxCust" id="maxCust" />
                            </div>

                            <div className="w-56 px-5 mr-3 rounded-lg bg-emerald-200 ">
                                <label className="text-sm">Average Cookies Per Sale</label>

                                <input type="text" className="" name="avgCookies" id="avgCookies" />



                            </div>
                            <div className="w-56 h-16 mr-6 rounded-lg bg-emerald-500">
                                <button type="submit" className="mx-24 my-5 ">Create</button>

                            </div>
                        </div>

                    </form>



                    <div>



                    </div>



                </main>




            </>
        )
    }




    return (
        <>

            <Form />
            <br />


        </>
    )

}












export default Main;
