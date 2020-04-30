import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table'



function Countires(props)
{
    const [sort, setSortedField] = useState('deaths');
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [quantity, setQuantity] = useState(20);
    const [backupList, setbackupList] = useState([]);


    var filterList = (event) => {
        var updatedList = list;
        updatedList = updatedList.filter(function(list) {
          return (
            list.country.toLowerCase().search(event.target.value.toLowerCase()) !==
            -1
          );
        });
        setbackupList(updatedList)
    };


    var nf = new Intl.NumberFormat();
    let i = 0;
  
    useEffect(() => {
      axios
        .get('https://corona.lmao.ninja/v2/countries?sort='+sort)
        .then((response) => {
          setList(response.data.slice(0, quantity));
          setbackupList(response.data.slice(0, quantity));
          setLoading(false);
        })
        .catch((err) => console.error('[Countries.jsx]', err.message));
    }, [quantity, sort]);

    var content;
    content = backupList.map((item) => {
        i = i + 1;
        return (
            <tr key={item.country}>
                <td>{i} &nbsp; <img src={item.countryInfo.flag} width="40" height="25" /></td>
                <td onClick={() => props.setCountry(item.country)} className="city">{item.country}</td>
                <td>{nf.format(item.cases)}</td>
                <td className="todayCases">+{nf.format(item.todayCases)}</td>
                <td>{nf.format(item.deaths)}</td>
                <td className="deaths">{nf.format(item.todayDeaths)}</td>
                <td>{nf.format(item.recovered)}</td>
                <td>{nf.format(item.active)}</td>
                <td>{nf.format(item.critical)}</td>
            </tr>
        );
    });


    if(!loading)
    {
        return(
            <div className="mb-30" >
                <br />
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Enter number of countries</span>
                    </div>
                    <input type="text" className="form-control" onChange={e => setQuantity(e.target.value)} placeholder="" />
                </div>
                <input type="text" placeholder="name" onChange={filterList} className="form-control filter"  />
                <br /><br />
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th onClick={() => setSortedField('country')}>Countires</th>
                            <th onClick={() => setSortedField('cases')}>Total Cases</th>
                            <th onClick={() => setSortedField('todayCases')}>New Cases</th>
                            <th onClick={() => setSortedField('deaths')}>Total Deaths</th>
                            <th onClick={() => setSortedField('todayDeaths')}>New Deaths</th>
                            <th onClick={() => setSortedField('recovered')}>Total Recovered</th>
                            <th onClick={() => setSortedField('active')}>Active Cases</th>
                            <th onClick={() => setSortedField('critical')}>Critical</th>
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

export default Countires;