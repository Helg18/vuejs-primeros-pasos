import lastfm from './lastfm';

const apiKey = lastfm.apiKey;

const urlBase = lastfm.urlBase;

const artistListByCountry = `?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`;


export default function getArtits(country)
{
	const url = artistListByCountry.replace(':country', country);
	// console.log(urlBase+url)
	return fetch(urlBase+url)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}