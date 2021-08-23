import React from 'react';
import './portfolioList.scss';

export default function PortfolioList({id, title, active, setSelected}) {
    return (
        <li
            onClick={() => setSelected(id)}
            className={active ? 'portfolioList active' : 'portfolioList'}>
            {title}
        </li>
    );
}
