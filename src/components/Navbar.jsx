import { Link } from "react-router-dom"

const Navbar =()=>{


    return(
        <>
        
        <div className='navbar'>
          <div className="logo"> Hi Nanna</div>
        
        <div className='link'>
            <Link className="a" to="/">
            Home
          </Link>
          <Link className="a" to="/Content">
            Content
          </Link>
          <Link className="a" to="/Card">
            Movies
          </Link>
          <Link className="a" to="/Crew">
            Crew
          </Link>

           
        </div>
        </div>

        </>
    )
}
export default Navbar

 









//  {/* <a href="/home">Home</a>
//             <a href="review">Review</a>
//             <a href="movies">Movies</a>
//             <a href="shows">shows</a> */}