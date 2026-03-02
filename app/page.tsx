import Image from "next/image";

export const metadata = {
    title: "Romain Notteau — Développeur Fullstack",
    description: "Portfolio moderne et éco-responsable de Romain Notteau, développeur Fullstack.",
};

export default function Home() {
    return (
        <main>
            {/* Hero */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Romain Notteau</h1>
                    <p className="tagline">Développeur Fullstack</p>
                    <p>
                        Étudiant en 3ème année de BUT Informatique, je me spécialise dans la
                        conception, le développement et la validation d'applications.
                        Passionné par la technologie et les solutions logicielles, j'ai
                        acquis des compétences solides en développement web à travers divers
                        projets académiques, professionnels et personnels.
                    </p>
                    <div className="cta">
                        <a href="#projets" className="btn primary">Voir mes projets</a>
                        <a href="#contact" className="btn ghost">Me contacter</a>
                    </div>
                </div>
            </section>

            {/* Projets */}
            <section id="projets">
                <h2>Projets sélectionnés</h2>
                <div className="grid">

                    <article className="card">
                        <img src="/bomberman.avif" alt="Bomberman" width="400" height="225" loading="lazy"/>
                        <h3>Bomberman</h3>
                        <p>Développement d'un jeu vidéo en Java, reprenant les mécaniques classiques du jeu Bomberman.</p>
                    </article>

                    <article className="card">
                        <img src="/lensjudge.avif" alt="Lens Judge" width="400" height="225" loading="lazy"/>
                        <h3>Lens Judge</h3>
                        <p>Création d'une application d'évaluation automatique pour les compétitions de programmation.</p>
                    </article>

                    <article className="card">
                        <img src="/toutou.avif" alt="Toutou en vadrouille" width="400" height="225" loading="lazy"/>
                        <h3>Toutou en vadrouille</h3>
                        <p>Conception d'un site web interactif pour partager des carnets de voyage, spécialement dédiés aux aventures avec son chien.</p>
                    </article>

                </div>
            </section>

            {/* Compétences */}
            <section id="competences">
                <h2>Compétences techniques</h2>
                <div className="skills-grid">
                    <span className="skill">HTML</span>
                    <span className="skill">CSS</span>
                    <span className="skill">JavaScript</span>
                    <span className="skill">C#</span>
                    <span className="skill">Java</span>
                    <span className="skill">PHP</span>
                    <span className="skill">Blazor</span>
                    <span className="skill">React</span>
                    <span className="skill">ASP.NET Core</span>
                    <span className="skill">Laravel</span>
                </div>
            </section>

            {/* Contact */}
            <section id="contact">
                <h2>Contact</h2>
                <div className="contact-grid">
                    <a href="mailto:romain.notteau@hotmail.com" className="contact-card">✉️ Email<br/>romain.notteau@hotmail.com</a>
                    <a href="https://www.linkedin.com/in/romain-notteau/" target="_blank" className="contact-card">💼 LinkedIn<br/>linkedin.com/in/romain-notteau</a>
                    <a href="https://github.com/RomainNtu/" target="_blank" className="contact-card">🐙 GitHub<br/>github.com/RomainNtu</a>
                </div>
            </section>

            {/* Footer */}
            <footer>
                <p>© {new Date().getFullYear()} Romain Notteau</p>
            </footer>
        </main>
    );
}