import React, { useState } from 'react';

const Top = () => {
    const [products, setProducts] = useState([]);
    const [companyName, setCompanyName] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [top, setTop] = useState();
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const images = [
        "https://th.bing.com/th/id/OIP.OU1CoSplSgGv9VpKxYneSAHaFc?w=249&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.XHipjBqYk-PlnfoyvJN3iAHaHa?w=184&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.5EZRHGR0LgL2IWcQ511TkQHaF5?w=231&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.kA1tzLXgVQZV2XV_fsAVxAHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.TDNAY0wUHorEvlvFB186fwHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.Dno__6b0G4ssuVwlsPp5GgHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.lYVzyTHvj2cME5ekzl8bYAHaFj?w=253&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.NP12wbK-M0fWeUEOoz18nAHaEZ?w=324&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.vlFa-l4vPvIFmW2xufXCIAHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.4L6J95l7InNowoXgvd38ggHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    ];

    const onSubmit = (e) => {
        e.preventDefault();
        // Replace actual service call with mock data
        // ProductService.getTopProducts(companyName, categoryName, top, minPrice, maxPrice).then((response) => {
        //     setProducts(response.data);
        // }).catch(() => {
        //     alert("Something went wrong!")
        // })
        setProducts(mockProducts);
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='flex items-center mt-10'>
                <input placeholder='Company Name' className='outline-none bg-gray-100 p-2 mx-5 rounded-xl' type="text" onChange={(e) => setCompanyName(e.target.value)} />
                <input placeholder='Category Name' className='outline-none bg-gray-100 p-2 mx-5 rounded-xl' type="text" onChange={(e) => setCategoryName(e.target.value)} />
                <input placeholder='Top Product Count' className='outline-none bg-gray-100 p-2 mx-5 rounded-xl' type="number" onChange={(e) => setTop(e.target.value)} />
                <input placeholder='Min Price' className='outline-none bg-gray-100 p-2 mx-5 rounded-xl' type="number" onChange={(e) => setMinPrice(e.target.value)} />
                <input placeholder='Max Price' className='outline-none bg-gray-100 p-2 mx-5 rounded-xl' type="number" onChange={(e) => setMaxPrice(e.target.value)} />
                <input type="submit" value="Get Product" />
            </form>
            <div className="flex flex-col my-10 w-[50%] mx-56">
                {products.map((product) => {
                    return (
                        <div key={product.pid} className="p-5 shadow-lg my-10 min-h-48 justify-evenly flex">
                            <div className="">
                                <p className='text-xl font-semibold'>{product.productName}</p>
                                <p className=''>Price : Rs.{product.price}</p>
                                <p className=''>Discount : {product.discount}%</p>
                                <p className=''>Rating : {product.rating} <span className='text-2xl text-yellow-400'>*</span></p>
                            </div>
                            <div className="">
                                <img className='h-40 w-40' src={images[Math.floor(Math.random() * 10)]} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
            {products.length === 0 && <div>
                There are no products available
            </div>}
        </div>
    );
}

export default Top;
