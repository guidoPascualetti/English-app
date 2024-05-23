import { useEffect, useState } from "react";

const Navbar = (props) => {
    let items = props.items;
    let title = props.title;

    console.log(items)



    return (
      <>
        <h1>{title}</h1>
        {
            items.map(item => item)
        }
</>
    )
}
export default Navbar