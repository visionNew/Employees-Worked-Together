import { splitData, formatDataMatrix, fileTypeData, sanitizeArray, findInvalidRows } from './dataUtils'


function handleFileUpload(e, setData, setErrors) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {
        const fileType = fileTypeData(file);
        const dataArr = splitData(reader.result, fileType);
        const dataMatrix = formatDataMatrix(dataArr, fileType);
        const newErrors = findInvalidRows(dataMatrix);

        if (newErrors.length > 0) {
            setData([]);
            setErrors(newErrors);
        } else {
            const sanitizedArray = dataMatrix.map(sanitizeArray);
            setData(sanitizedArray);

            localStorage.setItem('uploadedData', JSON.stringify(sanitizedArray));
        }
    };
}

function loadStoredData(setData, setIsDataLoaded) {
    const storedData = localStorage.getItem('uploadedData');
    if (storedData) {
        setData(JSON.parse(storedData));
        setIsDataLoaded(true);
    }
    localStorage.removeItem('uploadedData');
}

export { handleFileUpload, loadStoredData }