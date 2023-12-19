import { splitData, formatDataMatrix, sanitizeArray } from './dataUtils'


function handleFileUpload(e) {
    e.preventDefault();
    const files = e.target.files;
    const fileReaders = [];

    const processFile = (file) => {
    const reader = new FileReader();

    reader.onload = function () {
        const dataArr = splitData(reader.result);
        const dataMatrix = formatDataMatrix(dataArr);
        const sanitizedArray = sanitizeArray(dataMatrix);
        console.log(sanitizedArray);
    };

    reader.readAsText(file);
    fileReaders.push(reader);
    };

    for (const file of files) {
    processFile(file);
    }
}

export {handleFileUpload}