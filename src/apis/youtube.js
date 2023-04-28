import axios from "axios"

const KEY = 'AIzaSyBBGrsPNcByi5q7ACc_8exiNEkVb3GL4eo'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});

// AIzaSyBBGrsPNcByi5q7ACc_8exiNEkVb3GL4eo