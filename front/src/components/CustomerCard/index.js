import React from 'react';

import './styles.css'

function CustomerCard () {
    return(
        <div className="customer-card">
            <img src="https://1.bp.blogspot.com/_Z2jrTmbDUMI/TENrEYS2HsI/AAAAAAAAEeE/ah_wVS2WXoU/s1600/GATO+RISONHO.jpg" alt="Teste"/>
            
            <div className="customer-info">
                <header>
                    <h1>Fulano de tal</h1>
                    <span>idade anos</span>
                </header>
                <h2>fulanoemail@email.com</h2>
                <footer>
                    <h2>Empresa</h2>
                    <span>BUDGET: $353,428.45</span>
                </footer>
            </div>
        </div>
    );
}

export default CustomerCard;