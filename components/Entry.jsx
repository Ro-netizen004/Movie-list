export default function Entry(props){
    return(
    <div className="movie-card">
        <img 
            class="movie-poster" 
            src={props.entry.poster} 
        />
        <div className="movie-info">
        <h2>{props.entry.title}</h2>
        <p><strong>Year:</strong> {props.entry.year}</p>
        <p><strong>Genre:</strong> {props.entry.genre}</p>
        <p class="movie-review">{props.entry.review}</p>
        </div>
    </div>
    )
}