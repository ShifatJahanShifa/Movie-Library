import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({movie}) => {
    const { isFavorite, addToFavorite, removeFavorite }=useMovieContext()
    const favorite=isFavorite(movie.id)

    const handleClick=(e)=>{
        e.preventDefault()
        if(favorite) removeFavorite(movie.id)
        else addToFavorite(movie)
    }

    return ( 
        <div className="flex flex-col gap-3 w-fit p-5 bg-slate-400 rounded-md shadow-xl">
            <div className="relative">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={ movie.title } 
                className="w-40 h-40 mx-auto"/>
                <div className="absolute top-2 right-2">
                    {!favorite && <button className="p-1 text-center border border-black rounded-full shadow-md mx-auto bg-opacity-30 bg-orange-100" onClick={handleClick}>🤍</button>}
                    {favorite && <button className="p-1 text-center border border-black rounded-full shadow-md mx-auto bg-opacity-30 bg-orange-100" onClick={handleClick}>❤️</button>}
                </div>
            </div>
            <div>
                <h3 className="text-wrap">{ movie.title }</h3>
                <p>release date: { movie.release_date }</p>
            </div>
        </div>
     );
}
 
export default MovieCard;