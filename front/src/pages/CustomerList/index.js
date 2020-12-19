import React from 'react';
import TopHeader from '../../components/TopHeader'
import CustomerCard from '../../components/CustomerCard';

import './styles.css';

function CustomerList() {
  return (
    <div id="customer-page">
      <div className="customer-content">
        <TopHeader 
          title="Clientes ativos"
          description="Visualize seus clientes abaixo"
        />
        <main>
          <CustomerCard />
        </main>
      </div>
    </div>
  );
}

export default CustomerList;