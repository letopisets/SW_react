import {friends} from "../../utils/contsants.js";
import Friend from "./friend.jsx"


const DreamTeam = () => {
    return(
        <section className="float-right border border-base-color rounded-b-2xl w-1/2 grid grid-cols-3 gap-1">
            <h2 className="col-span-3 text-center ">Dream team</h2>
            {friends.map((friend, index) => <Friend key={index} picture={friend} pos={index+1}/>)}
        </section>
    )
}

export default DreamTeam