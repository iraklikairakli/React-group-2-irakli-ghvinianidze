import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

function Country(props)
{
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    var nf = new Intl.NumberFormat();
  
    useEffect(() => {
      axios
        .get('https://corona.lmao.ninja/v2/countries/'+props.county)
        .then((response) => {
          setList(response.data);
          setLoading(false);
        })
        .catch((err) => console.error('[Contry.jsx]', err.message));
    }, []);


    if(!loading)
    {
        return(
            <div className="mb-30" >
                <span className="white" id="goback" onClick={() => props.setCountry('')}>Go Back</span>
                <br />
                <h1 className="white">{list.country}</h1>
                <img src={list.countryInfo.flag} />
                <br /><br />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total Recovered</th>
                            <th>Active Cases</th>
                            <th>Critical</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr key={list.country}>
                        <td>{nf.format(list.cases)}</td>
                        <td className="todayCases">+{nf.format(list.todayCases)}</td>
                        <td>{nf.format(list.deaths)}</td>
                        <td className="deaths">{nf.format(list.todayDeaths)}</td>
                        <td>{nf.format(list.recovered)}</td>
                        <td>{nf.format(list.active)}</td>
                        <td>{nf.format(list.critical)}</td>
                    </tr>
                    </tbody>
                </Table>

                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card cardStyle">
                            <div className="card-body">
                                <h5 className="card-title">Cases Per One Million:</h5>
                                <p className="card-text">
                                    {nf.format(list.casesPerOneMillion)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card cardStyle">
                            <div className="card-body">
                                <h5 className="card-title">Deaths Per One Million:</h5>
                                <p className="card-text red">
                                    {nf.format(list.deathsPerOneMillion)}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="card cardStyle">
                            <div className="card-body">
                                <h5 className="card-title">Tests Per OneMillion:</h5>
                                <p className="card-text green">
                                    {nf.format(list.testsPerOneMillion)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Country;