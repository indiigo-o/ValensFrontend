import React from "react";

const Categories = (categories: any) => {

    console.log("Categories info:", categories.info);

    return (
        <>
            <li><a>{categories.info.name}</a></li>
        </>
    )
}

export default Categories;