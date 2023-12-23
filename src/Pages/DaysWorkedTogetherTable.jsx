import { useLocation } from 'react-router-dom';
import { sortData } from '../utils/sortUtils';
import { useSortData } from '../hooks/useSortData';
import * as dataManipulation  from '../utils/calculateUtils';
import Table from '../components/Table/Table';

function DaysWorkedTogetherTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();

    const groupedData = dataManipulation.groupByProject(data);
    const sortedData = groupedData.map(group => [
        group.employees.reverse().join(', '),
        group.project,
        group.daysWorkedTogether === 0 ? 'They Didn`t Work Together' : group.daysWorkedTogether,
    ]);

    
        const tableProps = {
            title: 'Employees Worked Together Period',
            headers: ['Employees', 'Project', 'Days Worked Together'],
            includeIndex: true,
            sortable: true,
            data: sortedData,
            handleSort:handleSort,
            sortFunction: (data) => sortData(data, sortColumn, sortOrder),
        };

        return <Table {...tableProps} />;
}

export default DaysWorkedTogetherTable;