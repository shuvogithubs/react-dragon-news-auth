import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    // const [news, setNews] = useState([])




    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // useEffect(() => {
    //     fetch('/public/news.json')
    //         .then(res => res.json())
    //         .then(data => setNews(data))
    // }, [])
    return (
        <div className="space-y-10 text-start">
            <h2 className="text-xl font-bold">All Categories</h2>
            <h2 className="text-xl font-semibold bg-[#9F9F9F] p-4 text-center">National News </h2>

            {
                categories.map(category => <Link to={`/category/${category} `} className="block mx-auto text-left ml-14 text-xl font-semibold text-[#9F9F9F]" key={category.id}>{category.name}</Link>)
            }
            
                {/* {
                    news.map(new => <Link key={new.category_id}>{new.title} </Link> )
                }
             */}

        </div>
    );
};

export default LeftSideNav;