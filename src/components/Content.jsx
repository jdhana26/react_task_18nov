const Content = () => {
    const year =2023
    const movietitle="Hi Nanna"
    const movieDes=`${movietitle} is a Telugu romantic drama film about a single father, Viraj (Nani), who must reveal the truth about his 
    six-year-old daughter Mahi's (Kiara Khanna) mother after she meets a woman
     named Yashna (Mrunal Thakur). The story explores their love, their daughter's life-threatening lung condition (cystic fibrosis), and how Yashna's arrival brings buried secrets to light. The film, directed by Shouryuv, received positive reviews for its emotional depth, performances, and music.`
    return (
        <>
            <div className="content">
                <h1> {movietitle} {year}</h1>
                <p>{movieDes} </p>
            </div>
        </>
    )
}
export default Content