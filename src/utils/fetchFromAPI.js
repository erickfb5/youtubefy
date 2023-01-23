import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: { maxResults: "50" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
} catch (error) {
	if (error.response) {
		console.log("Request made but the server responded with an error")
	} else if (error.request) {
		console.log("Request made but no response is received from the server.")
	} else {
		console.log ('Error occured while setting up the request')
	}
}
 
};

axios
  .request(options)
  .then((response) => console.log(response))
  .catch((error) => {
	if (error.response) {
      console.log("Request made but the server responded with an error")
    } else if (error.request) {
      console.error("Request made but no response is received from the server.")
    } else {
      console.log ('Error occured while setting up the request')
    }

  });
