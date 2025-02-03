import {starwarsInfo} from "../../utils/contsants.js";

const StarWars = () => {
    return (
        <div className={"text-[2em] tracking-[.2em] leading-[1.5] text-justify p-0.5"}>
            {starwarsInfo}
        </div>
    )
}
export default StarWars;