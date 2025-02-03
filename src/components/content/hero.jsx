import main_hero from '../../assets/main.jpg'
const Hero = () => {
    return (
        <section className={"float-left w-1/4 mr-2"}>
        <img className={"w-full shadow-hero"} src={main_hero} alt="Hero" />
        </section>
    )
}
export default Hero