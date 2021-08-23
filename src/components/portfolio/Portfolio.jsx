import {useEffect, useState} from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import {
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from '../../data';

export default function Portafolio() {
    const [selected, setSelected] = useState('web');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'web',
            title: 'Web App',
        },
        {
            id: 'mobile',
            title: 'Mobile App',
        },
        {
            id: 'desing',
            title: 'Desing',
        },
        {
            id: 'branding',
            title: 'Branding',
        },
    ];

    useEffect(() => {
        switch (selected) {
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'desing':
                setData(designPortfolio);
                break;
            case 'branding':
                setData(contentPortfolio);
                break;
            default:
                setData(webPortfolio);
                break;
        }
    }, [selected]);
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        {...{setSelected}}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((item) => (
                    <div key={item.id} className="item">
                        <img src={item.img} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
