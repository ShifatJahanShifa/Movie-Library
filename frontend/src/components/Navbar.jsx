import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex flex-col">
            <div className="flex flex-row gap-2 mb-4 mx-auto">
                <img src="../../movie2.jpg" alt="movie" className="w-10 h-10"/>
                <Link to="/" className=" text-black hover:text-blue-900 font-semibold text-4xl">Movie Library</Link>
            </div>
            <div className="flex flex-row gap-3 text-center mx-auto">
                <Link to='/' className=" text-black hover:text-blue-900 text-lg">Home</Link>
                <Link to='favorite' className=" text-black hover:text-blue-900 text-lg">Favorites</Link>
            </div>

        </div>
     );
}
 
export default Navbar;
<div>
    <Link to='/'>Home</Link>
    <Link to='favorite'>Favorites</Link>
</div>