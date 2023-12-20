import './FileInput.css';

function FileInput({ onChange }) {

    return (
        <div className="label__container">
            <label htmlFor="file">Choose File</label>
            <input type="file" onChange={onChange} />
        </div>
    );
}

export default FileInput;