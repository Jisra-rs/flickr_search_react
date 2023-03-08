import { URL_FLICKR_REST, APP_API_KEY } from '../services/DataConnection';

const URL_FETCH = URL_FLICKR_REST + '&api_key=' + APP_API_KEY;

export async function getPicturesBySearch(queryPhoto, queryPage) {
  const picture = queryPhoto;
  const page = queryPage;
  const URL =
    URL_FETCH +
    '&text=' +
    picture +
    '&page=' +
    page +
    '&format=json&nojsoncallback=1';
  // Fetch-Promise
  const response = await fetch(URL);
  const responseJson = await response.json();
  return responseJson;
}
