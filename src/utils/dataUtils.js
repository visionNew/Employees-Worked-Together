function splitData(string) {
    return string.split(/(\r\n|\r|\n)/g).filter((row) => row.trim().length !== 0);
}

function formatDataMatrix(array) {
    return array
        .map((row) => row.split(",").map(trimString));
}

function trimString(string) {
    return string.trim();
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

function validateDate(dateString) {
    if (typeof dateString === 'string' && dateString.trim().toUpperCase() === 'NULL') {
        return new Date().toISOString().split('T')[0];
    }
    return dateString;
}

export { splitData, formatDataMatrix, sanitizeArray, findInvalidRows, validateDate};