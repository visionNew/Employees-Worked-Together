import { calculateDaysWorked } from '../utils/calculateUtils';

function DaysWorkedByProjectTable({ data }) {

return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Project</th>
                        <th>Date From</th>
                        <th>Date To</th>
                        <th>Days Worked</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((row, index) => {
                    const daysWorked = calculateDaysWorked(row[2], row[3]);
                    return (
                    <tr key={index}>
                        <td>{row[0]}</td>
                        <td>{row[1]}</td>
                        <td>{row[2]}</td>
                        <td>{row[3]}</td>
                        <td>{daysWorked}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    );
}
export default DaysWorkedByProjectTable