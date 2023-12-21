function calculateDaysWorked(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate === 'NULL' ? new Date() : new Date(endDate);
    
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

function calculateDaysWorkedTogether(startDate1, endDate1, startDate2, endDate2) {
    const start1 = new Date(startDate1);
    const end1 = endDate1 === 'NULL' ? new Date() : new Date(endDate1);
    const start2 = new Date(startDate2);
    const end2 = endDate2 === 'NULL' ? new Date() : new Date(endDate2);

    const start = start1 > start2 ? start1 : start2;
    const end = end1 < end2 ? end1 : end2;

    if (start > end) {
        return 0;
    }

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

function groupByProject(data) {
    const projectsMap = new Map();

    data.forEach((row) => {
        const projectKey = row[1];

        if (projectsMap.has(projectKey)) {
            const daysWorkedTogether = calculateDaysWorkedTogether(
                row[2], row[3],
                projectsMap.get(projectKey).startDate, projectsMap.get(projectKey).endDate
            );

            projectsMap.get(projectKey).daysWorkedTogether += daysWorkedTogether;
            projectsMap.get(projectKey).employees.push(row[0]);
        } else {
            projectsMap.set(projectKey, {
                project: projectKey,
                startDate: row[2],
                endDate: row[3],
                daysWorkedTogether: 0,
                employees: [row[0]],
            });
        }
    });

    return Array.from(projectsMap.values());
}

export {calculateDaysWorked, calculateDaysWorkedTogether, groupByProject }