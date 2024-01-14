function splitData(string, fileType) {
    if (fileType === 'csv') {
        return string.split(/(\r\n|\r|\n)/g).filter((row) => row.trim().length !== 0);
    } else if (fileType === 'json') {
        return JSON.parse(string).map((obj) => JSON.stringify(obj));
    } else {
        return [];
    }
}

function formatDataMatrix(array, fileType) {
    if (fileType === 'csv') {
        return array.map((row) => row.split(",").map(trimString));
    } else if (fileType === 'json') {
        return array.map((row) => {
            const parsedRow = JSON.parse(row);
            return Object.values(parsedRow);
        });
    } else {
        return [];
    }
}

function trimString(string) {
    return string.trim();
}

function fileTypeData(file) {
    return file.name.split('.').pop().toLowerCase();
}

function findInvalidRows(matrix) {
    return matrix.map((row, index) => (row.length !== 4 ? index + 1 : null)).filter((error) => error !== null);
    }

function sanitizeArray(row) {
    return row.map((cell, index) => {
        if (index === 2 || index === 3) {
        return validateDate(cell);
        }
        return cell;
    });
}

function getLocalDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function validateDate(dateString) {
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (isoDateRegex.test(dateString)) {
        return dateString;
    }

    const dmyDateRegex = /^\d{2}-\d{2}-\d{4}$/;
    if (dmyDateRegex.test(dateString)) {
        const [day, month, year] = dateString.split('-');
        return `${year}-${month}-${day}`;
    }

    const dmyDateRegex2 = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dmyDateRegex2.test(dateString)) {
        const [day, month, year] = dateString.split('/');
        return `${year}-${month}-${day}`;
    }

    const ymdDateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
    if (ymdDateRegex.test(dateString)) {
        const [year, month, day] = dateString.split('/');
        return `${year}-${month}-${day}`;
    }

    return getLocalDate();
}

export { splitData, formatDataMatrix, fileTypeData, sanitizeArray, findInvalidRows, validateDate};