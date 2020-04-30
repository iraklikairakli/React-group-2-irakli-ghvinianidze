import React, { useState, useEffect } from 'react';
import axios from 'axios';


function General(props)
{
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    var nf = new Intl.NumberFormat();

  
    useEffect(() => {
      axios
        .get('https://corona.lmao.ninja/v2/all')
        .then((response) => {
          setList(response.data);
          setLoading(false);
        })
        .catch((err) => console.error('[General.jsx]', err.message));
    }, []);


    return(
        <div>
            <div className="alert mt-10">
                <b className="white">Coronavirus Cases :  &nbsp;&nbsp;
                    <span className="red">
                    {!loading ? nf.format(list.cases) : <div className="spinner-border text-info align-self-center" role="status">
                                    <span className="sr-only"> Loading...</span>
                    </div>}
                    </span>
                </b>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card cardStyle">
                        <div className="card-body">
                            <h5 className="card-title">Today Cases:</h5>
                            <p className="card-text">
                                {!loading ? nf.format(list.todayCases) : <div className="spinner-border text-info align-self-center" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card cardStyle">
                        <div className="card-body">
                            <h5 className="card-title">Deaths</h5>
                            <p className="card-text red">
                                {!loading ? nf.format(list.deaths) : <div className="spinner-border text-info align-self-center" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-4">
                    <div className="card cardStyle">
                        <div className="card-body">
                            <h5 className="card-title">Recovered</h5>
                            <p className="card-text green">
                                {!loading ? nf.format(list.recovered) : <div className="spinner-border text-info align-self-center" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
        </div>



        
    )
}

export default General;