import Hero from "../content/hero.jsx"
import Content_Text from "../content/content_text"
import DreamTeam from "../content/dreamTeam.jsx"
const Content = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <Content_Text/>  
        </main>
    )
}
export default Content