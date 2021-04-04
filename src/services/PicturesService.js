
const URL_FLICKR_REST = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
const APP_API_KEY = "711fee89a5c0c9b86b046e640eb1ec3b";
const URL_FETCH = URL_FLICKR_REST + '&api_key=' + APP_API_KEY ;

export async function getPicturesBySearch (queryPhoto,queryPage) {
    const picture = queryPhoto;
    const page = queryPage;
    const URL = URL_FETCH + '&text=' + picture + '&page=' + page+ '&format=json&nojsoncallback=1';
    // Fetch-Promise
    const response = await fetch(URL)
    const responseJson = await response.json()
      return responseJson
}
