import React from 'react';
import { useHistory } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs'

import './styles.css';

function PageHeader(props) {
    const { goBack } = useHistory();

    return (
        <header className="page-header">
            <div className="top-bar-container">
                <button type="button" onClick={goBack}>
                    <BsBoxArrowInLeft size={26} color="#063057"/>
                </button>
            </div>

            <div className="header-content">
                <strong>{props.title}.</strong>

                {props.children}
            </div>
        </header>
    )
}

export default PageHeader;