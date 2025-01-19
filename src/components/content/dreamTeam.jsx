import {friends} from "../../utils/contsants.js";
import Friend from "./friend.jsx"


const DreamTeam = () => {
    return(
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-12 text-center">Dream team</h2>
            {friends.map((friend, index) => <Friend key={index} picture={friend} pos={index+1}/>)}
            {/*<img className="col-4 p-1" src={friend2} alt="Friend"/>*/}
            {/*<img className="col-4 p-1" src={friend3} alt="Friend"/>*/}
            {/*<img className="col-4 p-1" src={friend4} alt="Friend"/>*/}
            {/*<img className="col-4 p-1" src={friend5} alt="Friend"/>*/}
            {/*<img className="col-4 p-1" src={friend6} alt="Friend"/>*/}
            {/*<img className="col-4 p-1 bottomLeft" src={friend7} alt="Friend"/>*/}
            {/*<img className="col-4 p-1" src={friend8} alt="Friend"/>*/}
            {/*<img className="col-4 p-1 bottomRight" src={friend9} alt="Friend"/>*/}
        </section>
    )
}

export default DreamTeam