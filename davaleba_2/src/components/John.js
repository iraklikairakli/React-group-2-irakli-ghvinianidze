import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'



function John(props)
{
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    var nf = new Intl.NumberFormat();
    let i = 0;
  
    useEffect(() => {
      axios
        .get('https://corona.lmao.ninja/v2/jhucsse')
        .then((response) => {
          setList(response.data);
          setLoading(false);
        })
        .catch((err) => console.error('[Countries.jsx]', err.message));
    }, []);

    var content;
    content = list.map((item) => {
        i = i + 1;
        return (
            <tr key={item.country}>
                <td>{i}</td>
                <td>{item.country}</td>
                <td>{item.province}</td>
                <td>{nf.format(item.stats.confirmed)}</td>
                <td>{nf.format(item.stats.deaths)}</td>
                <td>{nf.format(item.stats.recovered)}</td>
                <td>{item.updatedAt}</td>
            </tr>
        );
    });


    if(!loading)
    {
        return(
            <div className="mb-30" >
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>Province</th>
                            <th>Confirmd</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </Table>
            </div>
        )
    }
    else{
        return(
            <div>
                <div className="spinner-border text-info align-self-center" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <br />
                <br />
            </div>


        )

    }
}

export default John;