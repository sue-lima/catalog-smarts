import React from 'react';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs'

import './styles.css';

function PageHeader(props) {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <BsBoxArrowInLeft />
                </Link>
            </div>

            <div className="header-content">
                <strong>{props.title}.</strong>
                { props.description && <p>{props.description}</p>}

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;