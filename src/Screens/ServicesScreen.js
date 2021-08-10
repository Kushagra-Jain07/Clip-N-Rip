import React from "react"
import {datas} from "../Components/services"

function ServicesScreen() {
    return(
        <div className="service-container">
                <table className="table">
                    <tbody>
                        {datas.map(data => {
                        return <tr key={data.id}>
                            <td>{data.id}.</td>
                            <td> {data.name}</td>
                            <td>{data.details}</td>
                            <td>£ {data.price}</td>
                        </tr>})}
                    </tbody>
                </table>
        </div>
    )
}

export default ServicesScreen