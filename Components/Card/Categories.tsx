import Link from "next/link";
import React from "react";

const Categories = (categories: any) => {

    console.log("Categories info:", categories.info);

    return (
        <>
            <Link href={`/genres/${categories.info.name}`}>
                <li><a>{categories.info.name}</a></li>
            </Link>
        </>
    )
}

export default Categories;