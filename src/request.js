const api_key = "b988754cffa2df249c974ac7b1d714e5"

const requests={
    baseUrl:`https://api.themoviedb.org/3`,
    trending_week :{ url : `/trending/all/week?api_key=${api_key}`, heading:"Trending This Week"},
    trending_day : {url : `/trending/all/day?api_key=${api_key}&page=1` , heading:"Trending This Day"},
    top_rated:{url : `/movie/top_rated?api_key=${api_key}`,heading:"TopRated Movies"},
    action_movies:{url:`/discover/movie?api_key=${api_key}&page=1&with_genres=28`,heading:"Top Action Movies"},
    thriller_movies:{url : `/discover/movie?api_key=${api_key}&page=1&with_genres=53`,heading:"Top Thriller Movies"},
    mystery_movies:{url:`/discover/movie?api_key=${api_key}&page=1&with_genres=9648`,heading:"Top Mystery Movies"},
    romantic_movies:{url:`/discover/movie?api_key=${api_key}&page=1&with_genres=10749`,heading:"Top Romantic Movies"},
    documentries_movies:{url:`/discover/movie?api_key=${api_key}&page=1&with_genres=99`,heading:"Top Documentries Movies"},
    scifi_movies:{url:`/discover/movie?api_key=${api_key}&page=1&with_genres=878`,heading:"Top Science fiction Movies"},
    netflix_series:{url:`/discover/tv?api_key=${api_key}&with_networks=213`,heading:"Top Netflix Originals"},
    amazon_series:{url:`/discover/tv?api_key=${api_key}&with_networks=1024`,heading:"Top Amaxon Prime Originals"},
    action_tv:{url:`/discover/tv?api_key=${api_key}&page=1&with_genres=28`,heading:"Top Action Series"},
    thriller_tv:{url:`/discover/tv?api_key=${api_key}&page=1&with_genres=53`,heading:"Top Thriller Series"},
    mystery_tv:{url:`/discover/tv?api_key=${api_key}&page=1&with_genres=9648`,heading:"Top Mystery Series"},
    romantic_tv:{url:`/discover/tv?api_key=${api_key}&page=1&with_genres=10749`,heading:"Top Romantic Series"},
    documentries_tv:{url:`/discover/tv?api_key=${api_key}&page=1&with_genres=99`,heading:"Top Documnetry Series"},
    images:`https://image.tmdb.org/t/p/w500`
}

export default requests