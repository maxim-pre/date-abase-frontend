//defualt api route for requests

let apiRoute;
const expressPort = 5007;
const apiUrls = {
  development: `http://localhost:${expressPort}/api/`,
  production: `https://protected-citadel-18819.herokuapp.com//api/`,
};

if (window.location.hostname === "localhost") {
  apiRoute = apiUrls.development;
} else {
  apiRoute = apiUrls.production;
}

export default apiRoute;
