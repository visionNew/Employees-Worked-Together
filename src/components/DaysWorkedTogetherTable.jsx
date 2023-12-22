import { useLocation } from 'react-router-dom';
import { groupByProject } from '../utils/calculateUtils';


function DaysWorkedTogetherTable() {
    const location = useLocation();
    const data = location.state["data"];
    const projectsData = groupByProject(data);
    
return (
    <>
        <table>
            <thead>
            <tr>
                <th>Employees</th>
                <th>Project</th>
                <th>Days Worked Together</th>
            </tr>
            </thead>
            <tbody>
            {projectsData.map((row, index) => (
                <tr key={index}>
                    <td>{row.employees.join(', ')}</td>
                    <td>{row.project}</td>
                    <td>{row.daysWorkedTogether}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default DaysWorkedTogetherTable;
