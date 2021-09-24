// import {useEffect, useState} from 'react';
import './portfolio.scss';
// import PortfolioList from '../portfolioList/PortfolioList';
import {portfolioProjects} from '../../data';

export default function Portafolio() {
    // useEffect(() => {
    //     switch (selected) {
    //         case 'web':
    //             setData(webPortfolio);
    //             break;
    //         case 'mobile':
    //             setData(mobilePortfolio);
    //             break;
    //         case 'desing':
    //             setData(designPortfolio);
    //             break;
    //         case 'branding':
    //             setData(contentPortfolio);
    //             break;
    //         default:
    //             setData(webPortfolio);
    //             break;
    //     }
    // }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <p>{`Here are a few design projects I've worked on recently. Want to see more? Email me.`}</p>
            <div className="container">
                {portfolioProjects.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
