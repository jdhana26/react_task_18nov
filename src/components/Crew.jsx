const Crew= ()=>{
const datas= {title:"Hi nanna",hero:"Nani"}
const year =2023
    const movietitle="Hi Nanna"
    const movieDes=`${movietitle} is a Telugu romantic drama film about a single father, Viraj (Nani), who must reveal the truth about his 
    six-year-old daughter Mahi's (Kiara Khanna) mother after she meets a woman
     named Yashna (Mrunal Thakur). The story explores their love, their daughter's life-threatening lung condition (cystic fibrosis), and how Yashna's arrival brings buried secrets to light. The film, directed by Shouryuv, received positive reviews for its emotional depth, performances, and music.`

     const on =true;
     const off = 0;
     const value=undefined;
    return(
<>
<section>
    <div>
    
        <h1>{movietitle}</h1>
        <p>{movieDes}</p>
    </div>
</section>

{/* ternary */}
{on ? <section>
    <div>
    
        <h1>{movietitle}</h1>
        <p>{movieDes}</p>
    </div>
</section>:<p>there is no content</p>}

{/* optional */}
{off && <section>
    <div>
    
        <h1>{movietitle}</h1>
        <p>{datas.title}</p>
    </div>
</section>}


{/* nullish */}
{value ?? <section>
    <div>
    
        <h1>{movietitle}</h1>
        <p>{datas.title}</p>
    </div>
</section>}

</>


    )

}
export default Crew