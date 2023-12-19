/* eslint-disable react/prop-types */
import './ErrorDysplay.css';

function ErrorDisplay({ errors }) {
    return (
        <div className="error__display">
            {errors.map((error, index) => (
                <p key={index}>Data on row <span>{error}</span> is invalid</p>
            ))}
        </div>
    );
}

export default ErrorDisplay;