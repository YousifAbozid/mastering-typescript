import { User } from "./User";
import { Company } from "./Company";
import {} from "google.maps"; // you should import google.maps like this so you can use namespace google
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
