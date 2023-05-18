import React from "react";
import Lupa from "../img/icons/lupa.png";

const SearchCountry = ({ handleSumit }) => {
    return (
        <>
            <form action="" onSubmit={handleSumit}>
                <label>
                    <input
                        className="btn-search"
                        type="text"
                        placeholder="Weather in..."
                    />
                    <button className="btn-find">
                        {" "}
                        <img src={Lupa} alt="Buscar" className="lupa" />
                    </button>
                </label>
            </form>
        </>
    );
};

export default SearchCountry;
