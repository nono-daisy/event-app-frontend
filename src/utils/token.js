export default function getAccessToken () {
    const authToken = localStorage.getItem("auth");

    console.log(authToken)
    if (!authToken) return null

    const authTokenObj = JSON.parse(authToken);

    console.log(authTokenObj)

    const accessToken = authTokenObj["accessToken"];

    if (!accessToken) return null;

    return accessToken;

}