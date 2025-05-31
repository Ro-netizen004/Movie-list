import movie_icon from '../images/movie-icon.png'
export function Header(){
    return(
        <header>
            <img className="logo-img" alt="movie icon" src={movie_icon}/>
            <span>Cinelist</span>
        </header>
    )
}