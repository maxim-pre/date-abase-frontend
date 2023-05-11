let apiRoute;
const expressPort = 5007;
const apiUrls = {
  development: `http://localhost:${expressPort}/api/`,
  production: `https://salty-hamlet-33527.herokuapp.com/api/`,
};

if (window.location.hostname === "localhost") {
  apiRoute = apiUrls.development;
} else {
  apiRoute = apiUrls.production;
}

export default apiRoute;
