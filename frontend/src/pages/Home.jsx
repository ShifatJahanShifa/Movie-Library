import MovieCard from "../components/MovieCard";
import { useEffect, useState } from 'react'
import { searchMovies, getPopularMovies } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [ searchQuery, setSearchQuery ]=useState('')
    const [ movies, setMovies ]=useState([])
    const [ isLoading, setIsLoading ]=useState(true)
    const [ error, setError ]=useState(null)
    const Navigate=useNavigate()

    useEffect(()=>{
        const loadPopularMovies= async ()=>{
            try{
                const popularMovies=await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err)
            {
                console.log(err)
                setError(err.message)
            }
            finally{
                setIsLoading(false)
            }
        }

        loadPopularMovies()
    },[])
    
    const handleSubmission=async (e)=>{
        e.preventDefault()
        
        if(!searchQuery.trim()) return
        if(isLoading) return
        setIsLoading(true)
       
        try{
            const results=await searchMovies(searchQuery)
            setMovies(results)
        }
        catch(err){
            setError(err.message)
        }
        finally
        {
            setIsLoading(false)
            setSearchQuery("")
            setError(null)
        }
    }

    const handleBack=()=>{
        window.location.reload();
    }

    return ( 
        <div>
            <div className="w-fit p-4 mx-auto">
                <form className="flex flex-row gap-3" onSubmit={handleSubmission}>
                    <input type="text" 
                    placeholder="search for a movie" 
                    className="bg-slate-100 border border-black rounded-md"
                    value={searchQuery}
                    onChange={(e)=>{
                        setSearchQuery(e.target.value)
                    }}
                    />
                    <button type="submit" className="p-3 bg-black text-white">search</button>
                    {/* <p>{searchQuery}</p> */}
                </form>
            </div>

            {/* movie section */}
            
            { isLoading && <div>Loading... </div>}
            { error && <div> { error }</div>}
            {
                movies.length>0 ? (
                <div className="flex flex-row flex-wrap gap-5"> 
                    {movies.map((movie)=>(
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
                ) :
                (
                    <div> 
                        <h3 className="text-center">Oops! No result found</h3>
                        <button className="p-2 border border-black text-black bg-slate-100 hover:bg-slate-300 rounded-lg"
                        onClick={handleBack}>Back</button>
                    </div>
                )
            }
        </div>
     );
}
 
export default Home;