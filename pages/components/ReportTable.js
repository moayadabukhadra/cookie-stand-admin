import { hours } from "../../data";
import { useState } from "react";




function ReportTable({ data }) {














    return (


        <div id="table-div">
            {
                <table className="w-1/2 mx-auto my-4 rounded-lg bg-emerald-500" id="report-table" border='1'>








                    <thead>
                        <th>Location</th>
                        {

                            hours.map(hour => {
                                console.log(hour);
                                return (

                                    <th >{hour}</th>

                                );
                            }
                            )


                        }
                        <th>Totals</th>
                    </thead>


                    <tbody id="table">

                        {
                            data.map(cookieStand => {
                                const hourly_sales = [];
                                for (let i = 0; i < hours.length; i++) {
                                    hourly_sales.push(Math.floor(Math.random() * (cookieStand.maxCust - cookieStand.minCust) * cookieStand.avgCookies));
                                }

                                return (
                                    <tr className="border border-current ">
                                        <td className="border border-current ">{cookieStand.location}</td>
                                        {
                                            hourly_sales.map(hourlySale => {
                                                return (
                                                    <td id="sale" name='sale' className="px-3 border border-current">{hourlySale}</td>
                                                );
                                            }
                                            )
                                        }
                                        <td className="px-3 border border-current">{hourly_sales.reduce((a, b) => a + b, 0)}</td>

                                    </tr>


                                );


                            }
                            )

                        }



                    </tbody>


                    <tfoot>
                        <tr className="border border-current">
                            <td className="border border-current">Totals</td>










                        </tr>
                    </tfoot>

                </table>
            }
        </div>


    )

}





















function Nodata({ data }) {
    if (data.length === 0) {
        return (
            <div className="flex justify-center">
                <h2 className="text-4xl text-center ">No Cookie Stands Available</h2>
            </div>
        );
    }
    else {
        return (
            <ReportTable data={data} />
        );
    }

}
export default Nodata;



