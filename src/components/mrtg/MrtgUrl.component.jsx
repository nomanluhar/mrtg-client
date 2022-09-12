import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios";
import { fetchSingleCustomer } from '../../api/api';


const MrtgUrlAndName = () => {

    const [mrtg, setMrtg] = useState([{ name: "", url: "" }])

    const { id } = useParams();

    useEffect(() => {
        loadOneCustomer(id);
    }, []);

    const loadOneCustomer = async (id) => {
        const response = await fetchSingleCustomer(id);
        setMrtg(response.data);
    }

    console.log('mrtg', mrtg?.mrtgValue?.map((e) => e?.name))



    return (
        <div>
            <h1>User : {id}</h1>

            {/* <li>Name: {mrtg?.email} </li> */}

            {/* <div>name: { mrtg?.mrtgValue?.map((e) => <div>{e?.name}</div>)} </div>
            <div>Url: { mrtg?.mrtgValue?.map((e) => e?.url)} </div> */}

            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {mrtg?.mrtgValue?.map((user, index) => (
                        <tr>
                            <td>{user?.name}</td>
                            <td>{user?.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default MrtgUrlAndName;