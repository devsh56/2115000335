import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    return (
        <div className="flex justify-end">
            <p className="mt-10">
                <button className="p-2 bg-green-500 text-white tracking-wider font-semibold rounded-xl mx-10" onClick={() => navigate("/all")}>AllProduct</button>
                <button className="p-2 bg-red-500 text-white tracking-wider font-semibold rounded-xl mx-10" onClick={() => navigate("/top")}>TopProduct</button>
            </p>
        </div>
    )
}

export default Navbar