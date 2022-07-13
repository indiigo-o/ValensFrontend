import React, { useEffect, useState } from "react";

const Categories = (categories: any) => {

    console.log("Categories info:", categories.info);

    return (
        <>
                <li><a href="#home">{categories.info.name}</a></li>
        </>
    )
}

export default Categories;