import hems from './image/hems.jpg';
function About() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <img
                src={hems}
                alt="About"
                className="rounded-2xl shadow-lg"
                style={{
                    height: "250px",
                    width: "250px"
                }}
            />
            <div>
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-lg leading-relaxed">
                    This is the about page content shown on the right side while the image is on the left.
                </p>
                <p>
                    Hi, I'm <b>Hemnath</b>! I’m learning the MERN stack and focusing mainly on
                    backend development. I'm also planning to learn Java soon to improve my
                    career opportunities.
                </p>
                <p>
                    I’m a huge bike lover! I love all bikes, especially the MT-15 and NS200.
                    I enjoy riding and exploring performance more than the brand name.
                </p>
                <p>
                    My goal is to become a strong full‑stack developer and grow in the tech
                    field.
                </p>
            </div>
        </div>
    );
}
export default About;