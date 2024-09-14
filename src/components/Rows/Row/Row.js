import React, { useEffect, useState } from 'react'
import "./Row.css"
import axios from '../../../utils/axios';
import movieTrailor from 'movie-trailer';
import YouTube from 'react-youtube';
import { useNavigate } from 'react-router-dom';

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovie] = useState([]);
    const navigate = useNavigate();
    // const [trailerUrl,setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(fetchUrl);
                setMovie(request.data.results);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        })();
    }, [fetchUrl]);

    
    // useEffect(() => {
    //     (async () =>{
    //         try{
    //             console.log(fetchUrl);
    //             const request = await axios.get(fetchUrl);
    //             console.log(request);
    //             setMovie(request.data.results);
    //         }catch(error){
    //             console.log("error".error);
    //         }
    //     })()
    // },[fetchUrl]);

    // const handleClick = (movie) => {
    //     if(trailerUrl){
    //         setTrailerUrl('')
    //     }else{
    //         movieTrailor(movie?.title || movie?.name || movie?.original_name)
    //             .then((url) =>{
    //                 console.log(url)
    //                 const urlParams = new URLSearchParams(new URL (url).search)
    //                 console.log(urlParams)
    //                 console.log(urlParams.get('v'))
    //                 setTrailerUrl(urlParams.get('v'));
    //             })
    //     }
    // }
    const handleClick = (movie) => {
        movieTrailor(movie?.title || movie?.name || movie?.original_name)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                const videoId = urlParams.get('v');
                if (videoId) {
                    navigate(`/trailer/${videoId}`); // Navigate to the trailer page
                }
            })
            .catch((error) => {
                console.error("Error fetching trailer URL:", error);
            });
    };



    // const opts = {
    //     height:'390',
    //     width:"100%",
    //     playerVars:{
    //         autoplay:1,
    //     },
    // }



//     return (
//         <div className='row'>
//             <h1>{title}</h1>
//             <div className='row__posters'>
//                 {movies?.map((movie,index) => (
//                     <img 
//                         onClick={() => handleClick(movie)}
//                         key={index} 
//                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
//                         alt={movie.name} 
//                         className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
// />

//                 ))}
//             </div>
//             <div style={{ padding: '40px' }}>
//                 {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//             </div>

//         </div>
//     )
    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='row__posters'>
                {movies?.map((movie, index) => (
                    <img
                        onClick={() => handleClick(movie)}
                        key={index}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row










// import React, { useEffect, useState } from 'react'
// import "./Row.css"
// import axios from '../../../utils/axios';
// import movieTrailor from 'movie-trailer';
// import YouTube from 'react-youtube';

// const Row = ({title,fetchUrl,isLargeRow}) => {
//     const [movies,setMovie] = useState([]);
//     const [trailerUrl,setTrailerUrl] = useState("");
//     const base_url = "https://image.tmdb.org/t/p/original";
    
//     useEffect(() => {
//         (async () =>{
//             try{
//                 console.log(fetchUrl);
//                 const request = await axios.get(fetchUrl);
//                 console.log(request);
//                 setMovie(request.data.results);
//             }catch(error){
//                 console.log("error".error);
//             }
//         })()
//     },[fetchUrl]);

//     const handleClick = (movie) => {
//         if(trailerUrl){
//             setTrailerUrl('')
//         }else{
//             movieTrailor(movie?.title || movie?.name || movie?.original_name)
//                 .then((url) =>{
//                     console.log(url)
//                     const urlParams = new URLSearchParams(new URL (url).search)
//                     console.log(urlParams)
//                     console.log(urlParams.get('v'))
//                     setTrailerUrl(urlParams.get('v'));
//                 })
//         }
//     }



//     const opts = {
//         height:'390',
//         width:"100%",
//         playerVars:{
//             autoplay:1,
//         },
//     }



//     return (
//         <div className='row'>
//             <h1>{title}</h1>
//             <div className='row__posters'>
//                 {movies?.map((movie,index) => (
//                     <img 
//                         onClick={() => handleClick(movie)}
//                         key={index} 
//                         src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
//                         alt={movie.name} 
//                         className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
// />

//                 ))}
//             </div>
//             <div style={{ padding: '40px' }}>
//                 {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
//             </div>

//         </div>
//     )
// }

// export default Row
