import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

const Favorite = () => {
    const { favorites }=useMovieContext()
    // console.log(favorites)

    return (
        <>
        { favorites.length>0 ? (
           <div className="flex flex-row flex-wrap gap-5"> 
           {favorites.map((movie)=>(
               <div key={movie.id}>
                   <MovieCard movie={movie} />
               </div>
           ))}
       </div>
        ):(
            <div>
                <h2>No favorite movie yet</h2>
            </div>
        )} 
        </>
     );
}
 
export default Favorite;