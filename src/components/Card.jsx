import Hinanna from "../assets/hii.jpeg";
import Rrr from "../assets/rrr.jpeg";
import Vmovie from "../assets/vnani.jpeg";



const Card = () => {
     
        const movieTicDetails = [{ moviename: "Hi Nanna",timing: "Mrng",location: "PVR" ,img :Hinanna}
            ,{moviename: "V",timing: "Evng", location: "xmax" ,img: Rrr },
  
        {
            moviename: "RRR",
            timing: "Night",
            location: "xmax",
            img: Vmovie
        }

        ]
    
    
    return (
        <>



            <div className="ticketmain">
                {movieTicDetails.map((e, i) => (
                    <div className="ticketdet" key={i}>

                        <div className="ticimage">
                         <img className='cardimg' src={e.img} alt="" />
                        </div>
                        <div className="ticmov">
                            <h1>{e.moviename}</h1>
                            <p>{e.timing}</p>
                            <p>{e.location}</p>
                            <button>Book now</button>
                     
                        </div>
                    </div>
                ))}
            </div>

        </>
    )

}
export default Card