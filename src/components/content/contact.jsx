import {useEffect, useState} from "react";
import {base_url, period_month} from "../../utils/contsants.js";

const Contact = () => {

        const [planets, setPlanets] = useState(['wait...']);

        async function fillPlanets(url) {
            const response = await fetch(url);
            const data = await response.json();
            const planets = data.map(item => item.name);
            setPlanets(planets);
            localStorage.setItem('planets', JSON.stringify({
                payload: planets,
                time: Date.now()
            }));
        }

        useEffect(() => {
            const planets = JSON.parse(localStorage.getItem('planets'));
            if (planets && ((Date.now() - planets.time) < period_month)) {
                setPlanets(planets.payload);
            } else {
                fillPlanets(`${base_url}/v1/planets`);
            }
        }, [])


    return (

        <div className={"flex w-full flex-wrap justify-center items-center my-4 mb-96"}>
            <form action=" " className={"flex w-72 flex-col flex-wrap justify-center mb-8 "}>
                <label className={"text-center text-xl font-semibold my-2"} htmlFor="fname">First Name:
                    <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"} type="text" id="fname" name="firstname" placeholder="Your name.."/></label>

                <label className={"text-center text-xl font-semibold my-2"}  htmlFor="lname">Last Name:
                <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"} type="text" id="lname" name="lastname" placeholder="Your last name.."/></label>

                <label className={"text-center text-xl font-semibold my-2"}  htmlFor="country">Country:
                    <select className={"w-full my-1 py-2 px-3 border border-base-color rounded-2xl"} id="country" name="country">
                        {planets.map(item => <option className={"bg-black"} value={item} key={item}>{item}</option>)}
                    </select></label>

                <input className={"w-full text-xl hover:bg-grean-salat-color my-2 bg-buttom-sub cursor-pointer py-2 px-3 rounded-2xl text-white"} type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact