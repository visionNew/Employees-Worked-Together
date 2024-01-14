import { FaUpload } from "react-icons/fa";
import './FileInput.css';

function FileInput({ onChange }) {

    return (
        <div className="label__container">
            <label htmlFor="file"><FaUpload className="label_icon"/>Choose File</label>
            <input type="file" onChange={onChange} />
        </div>
    );
}

export default FileInput;