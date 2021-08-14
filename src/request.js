const api_key = "b988754cffa2df249c974ac7b1d714e5"

const requests={
    baseUrl:`https://api.themoviedb.org/3`,
    trending_week : `/trending/all/week?api_key=${api_key}`,
    trending_day : `/trending/all/day?api_key=${api_key}&page=1`,
    search_movie:`/search/movie?api_key=${api_key}&language=en-US&query=suicide&page=1`,
    search_all:`/search/multi?api_key=${api_key}&query=wandavision&page=1`,
    search_tv:`/tv?api_key=${api_key}&page=1&query=banshee&include_adult=true`,
    top_rated:`/movie/top_rated?api_key=${api_key}&page=1`,
    action_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=28`,
    thriller_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=53`,
    mystery_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=9648`,
    romantic_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=10749`,
    documentries_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=99`,
    scifi_movies:`/discover/movie?api_key=${api_key}&page=1&with_genres=878`,
    netflix_series:`/discover/tv?api_key=${api_key}&with_networks=213`,
    amazon_series:`/discover/tv?api_key=${api_key}&with_networks=1024`,
    action_tv:`/discover/tv?api_key=${api_key}&page=1&with_genres=28`,
    thriller_tv:`/discover/tv?api_key=${api_key}&page=1&with_genres=53`,
    mystery_tv:`/discover/tv?api_key=${api_key}&page=1&with_genres=9648`,
    romantic_tv:`/discover/tv?api_key=${api_key}&page=1&with_genres=10749`,
    documentries_tv:`/discover/tv?api_key=${api_key}&page=1&with_genres=99`,
    images:`https://image.tmdb.org/t/p/w500`
}

export default requests