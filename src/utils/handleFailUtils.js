import { splitData, formatDataMatrix, sanitizeArray, findInvalidRows } from './dataUtils'


function handleFileUpload(e, setData, setErrors) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        const dataArr = splitData(reader.result);
        const dataMatrix = formatDataMatrix(dataArr);
        const newErrors = findInvalidRows(dataMatrix);

        if (newErrors.length > 0) {
            setData([]);
            setErrors(newErrors);
        } else {
            const sanitizedArray = dataMatrix.map(sanitizeArray);
            setData(sanitizedArray);
        }
    };
}

export {handleFileUpload}