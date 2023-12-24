import { useEffect, useRef, useState } from 'react';

function useDropDown(handleFilterClick) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        if (handleFilterClick) {
            handleFilterClick();
        }
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
        }
    };

    return { isDropdownOpen, toggleDropdown, dropdownRef };
}

export default useDropDown;