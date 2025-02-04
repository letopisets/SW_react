import {starwarsInfo} from "../../utils/contsants.js";
import Text from "./ui/text.jsx";

const StarWars = () => {
    return (
        <Text>
            {starwarsInfo}
        </Text>
    )
}
export default StarWars;