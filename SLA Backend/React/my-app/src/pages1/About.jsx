import hems from './assets/hems.jpg';
function About() {
    return (
        <div
            style={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: "20px"
            }}
        >
            <div style={{ width: "50%" }}>
                <h1>About Me</h1>
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

            <img
                src={hems}
                alt="hems"
                style={{
                    width: "50%",
                    borderRadius: "10px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)"
                }}
            />
        </div>
    );
}
export default About;
