
import Hero from "./content/hero.jsx";
import DreamTeam from "./content/dreamTeam.jsx";
import ContentText from "./content/content_text.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <ContentText/>
        </main>
    );
};

export default Home;