// import { User } from "./User";
// import { Company } from "./Company";
import {} from "google.maps";

const map = document.getElementById("map") as HTMLElement;

new google.maps.Map(map, {
    zoom: 1,
    center: { lat: 0, lng: 0 },
});
