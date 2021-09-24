import './testimonials.scss';

export default function Testimonials() {
    const data = [
        {
            id: 1,
            name: 'Gerardo Andres Peña',
            title: 'Manager of Constructora San Carlos',
            img: 'https://juansebastianp21portfolio.s3.sa-east-1.amazonaws.com/testimonials/andres_pena.png',
            icon: 'assets/twitter.png',
            desc: 'Working with Sebastian was better than expected. He is an incredibly talented developer but what really makes him stand out is his work ethic.',
            link: 'https://www.facebook.com/ConstructoraSanCarlosCo/',
        },
        {
            id: 2,
            name: 'Edwin Ordoñez',
            title: 'Co-Founder of Ceotic S.A.S.',
            img: 'https://juansebastianp21portfolio.s3.sa-east-1.amazonaws.com/testimonials/edwin_ordonez.png',
            icon: 'assets/youtube.png',
            desc: `Sebastian is a clear communicator with the tenacity and confidence to really dig in to tricky development scenarios and the collaborative friction that's needed to generate excellent work.`,
            featured: true,
            link: 'http://solucionesceotic.com/',
        },
        {
            id: 3,
            name: 'Carlos Molano',
            title: 'CEO of UDEKI',
            img: 'https://juansebastianp21portfolio.s3.sa-east-1.amazonaws.com/testimonials/carlos_molano.jpeg',
            icon: 'assets/linkedin.png',
            desc: 'Sebastian was a real pleasure to work with and we look forward to working with him again.',
            link: 'https://udeki.com/',
        },
    ];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((u) => (
                    <div
                        key={u.id}
                        className={u.featured ? 'card featured' : 'card'}>
                        <div className="top">
                            <img
                                src="assets/right-arrow.png"
                                className="left"
                                alt=""
                            />
                            <img src={u.img} className="user" alt="" />
                            <img src={u.icon} className="right" alt="" />
                        </div>
                        <div className="center">{u.desc}</div>
                        <div className="bottom">
                            <h3>{u.name}</h3>
                            <a href={u.link}>
                                <h4>{u.title}</h4>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
