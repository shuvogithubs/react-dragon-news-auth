import { useEffect, useState } from "react";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('/public/categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            left side:{categories.length}
        </div>
    );
};

export default LeftSideNav;