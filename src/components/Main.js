import React, { useEffect, useState } from 'react';
import ResultsTable from './ResultsTable';

export default function Main() {
    //For the select element (using controlled components method)
    const [selectedYear, setSelectedYear] = useState('2020-21');

    const handleChange = async (e) => {
        setSelectedYear(e.target.value);
    }
    //For storing the fetched data 
    const [data, setData] = useState({});

    //Every time when the select element changes its value, the useEffect is called to fetch the new data
    useEffect(() => {
        const getData = async (region) => {
            try {
                const response = await fetch(`https://api.beta.ons.gov.uk/v1/datasets/wellbeing-local-authority/editions/time-series/versions/2/observations?time=${selectedYear}&geography=${region[1]}&estimate=average-mean&measureofwellbeing=happiness`);
                const Jsonresponse = await response.json();
                setData(prev => {
                    return {
                        ...prev,
                        [region[1]]: [region[0], Jsonresponse.observations[0].observation]
                    }
                });
            } catch (error) {
                console.error(error.message);
            }
        }
        const regions = [['North East', 'E12000001'], ['North West', 'E12000002'], ['Yorkshire and The Humber', 'E12000003'], ['East Midlands', 'E12000004'], ['West Midlands', 'E12000005'], ['East of England', 'E12000006'], ['London', 'E12000007'], ['South East', 'E12000008'], ['South West', 'E12000009']];
        regions.forEach(region => {
            getData(region);
        });
    }, [selectedYear]);

    return (
        <div className='mainPage'>
            <div className='selectYear'>
                <select className='form-select form-select-sm' name='selectYear' value={selectedYear} onChange={handleChange}>
                    <option value='2020-21'>2020-21</option>
                    <option value='2019-20'>2019-20</option>
                    <option value='2018-19'>2018-19</option>
                    <option value='2017-18'>2017-18</option>
                    <option value='2016-17'>2016-17</option>
                </select>
            </div>
            {data && <ResultsTable data={data} year={selectedYear} />}
        </div>
    );
}