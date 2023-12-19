function splitData(string) {
    return string.split(/(\r\n|\r|\n)/g);
}

function formatDataMatrix(array) {
    return array
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(",").map(trimString));
}

function trimString(string) {
    return string.trim();
}

function sanitizeArray(row) {
    return row.map((cell, index) => {
        if (index === 2 || index === 3) {
        return validateDate(cell.trim());
        }
        return cell.trim();
    });
}

function validateDate(dateString) {
    if (typeof dateString === 'string' && dateString.toUpperCase() === 'NULL') {
        return new Date().toISOString().split('T')[0];
    }
    return dateString;
}

export { splitData, formatDataMatrix, sanitizeArray, validateDate};