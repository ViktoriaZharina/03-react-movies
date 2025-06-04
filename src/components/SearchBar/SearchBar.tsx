import css from "./SearchBar.module.css"


export default SearchBar(onSubmit){
    return (
        <header className={css.header}>
 <div className={css.container}>
 <a
 className={css.link}
href="https://www.themoviedb.org/"
 rel="noopener noreferrer"
 >
 Powered by TMDB
 </a>
<form className={css.form}>
 <input
 className={css.input}
 type="text"
name="query"
autoComplete="off"
placeholder="Search movies..."
 autoFocus
/>
 <button className={css.button} type="submit">
Search
 </button>
 </form>
 </div>
</header>

    )
}