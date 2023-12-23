import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { handleFileUpload } from '../../utils/handleFailUtils';
import FileInput from '../../components/FileInput/FileInput';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import './Statistic.css'
import Dropdown from './../../components/DropDown/Dropdown';
import DataLoadedMessage from '../../components/DataLoadedMessage/DataLoadedMessage';


function Statistic() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
            const storedData = localStorage.getItem('uploadedData');
            if (storedData) {
            setData(JSON.parse(storedData));
            setIsDataLoaded(true);
            }
        }, []);

    const handleFileChange = (e) => {
    handleFileUpload(e, setData, setErrors);
    setIsDataLoaded(true);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        if (isDataLoaded) {
            setIsDataLoaded(false);
        }
    };

    
    return (
        <section className='statistic'>
            <div className='container'>
                <div className="content">
                    <h1>Statistic Employees</h1>
                    <div className="statistic__filters">
                        <FileInput onChange={handleFileChange} />
                        <div className="dropdown">
                            <button className="dropdown__toggle" onClick={toggleDropdown}>
                                Filter
                            </button>
                            {isDropdownOpen && <Dropdown data={data} />}
                        </div>
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