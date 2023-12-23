import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { handleFileUpload } from '../../utils/handleFailUtils';
import FileInput from '../../components/FileInput/FileInput';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';



function Statistic() {
    const [data, setData] = useState([]);
    const [errors, setErrors] = useState([]);

    const handleFileChange = (e) => {
    handleFileUpload(e, setData, setErrors);
    };
    return (
        <div>
            <h1>Statistic Employees</h1>
            <FileInput onChange={handleFileChange} />

            {!!errors.length && <ErrorDisplay errors={errors} />}
            <nav>
                <NavLink to={"/employees-statistic/overall-stats"} state={{ data: data }}>
                    Overall Statistic
                </NavLink>
                <NavLink to={"/employees-statistic/worked-project-period"} state={{ data: data }}>
                    Project Period
                </NavLink>
                <NavLink to={"/employees-statistic/worked-together-period"} state={{ data: data }}>
                    Worked Together Period
                </NavLink>
            </nav>
            {!!data.length && <Outlet />}
        </div>
    );
}

export default Statistic;