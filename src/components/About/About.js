import person from './img/person.svg'

const About = () => {
    return (
        <div className="container">
        <div className="about">
            <h1>Loyiha haqida</h1>
            <p>Loyihaning asosiy maqsadi Namoz vaqtlarini har qanday qurilmadan va har qayerdan bilibolish imkonini berish va Sahih Hadislardan musulmonlarni har kuni bahramand etish.</p>
        <div className="creators">
        <h2>Loyiha yaratuvchilari:</h2>
        <div className="creator-profile">
        <div className="creator">
            <div className="creator-img">
            <img src={person} alt=""/>
            </div>
            <div className="creator-text">
            <h3>Ibragimov Muhammad Siddiq</h3>
            <h3>15 yosh Frontend Dasturchi</h3>
            </div>
            </div>
            <div className="creator">
            <div className="creator-img">
            <img src={person} alt=""/>
            </div>
            <div className="creator-text">
            <h3>Ibragimov Muhammad Siddiq</h3>
            <h3>15 yosh Frontend Dasturchi</h3>
            </div>
            </div>
        </div>
        </div>
        <div className="clear"></div>
        </div>
        </div>
    )
}

export default About
