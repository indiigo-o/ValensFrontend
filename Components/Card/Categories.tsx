import React, { useEffect, useState } from "react";

const Categories = (categories: any) => {
    
    console.log("Categories info:", categories.info);

    return (
        <>
            <div className="movie">
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{categories.info.name}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;