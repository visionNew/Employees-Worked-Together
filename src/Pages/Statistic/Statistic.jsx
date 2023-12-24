import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { handleFileUpload, loadStoredData  } from '../../utils/handleFailUtils';
import FileInput from '../../components/FileInput/FileInput';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import Dropdown from './../../components/DropDown/Dropdown';
import DataLoadedMessage from '../../components/DataLoadedMessage/DataLoadedMessage';
import './Statistic.css'


function Statistic() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        loadStoredData(setData, setIsDataLoaded);
    }, []);

    const handleFileChange = (e) => {
    handleFileUpload(e, setData, setErrors);
    setIsDataLoaded(true);
    };

    const handleFilterClick = () => {
        setIsDataLoaded(false);
    };

    return (
        <section className='statistic'>
            <div className='container'>
                <div className="content">
                    <h1>Statistic Employees</h1>
                    <div className="statistic__filters">
                        <FileInput onChange={handleFileChange} />
                        <Dropdown data={data} isStatisticComponent={true} handleFilterClick={handleFilterClick}/>
                    </div>
                    {isDataLoaded && <DataLoadedMessage />}
                    {!!errors.length && <ErrorDisplay errors={errors} />}
                    {!!data.length && <Outlet />}
                </div>
            </div>
        </section>
    );
}

export default Statistic;