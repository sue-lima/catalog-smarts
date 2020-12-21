import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'

import './styles.css'

function CustomerCard ({customers}) {
    return(
        <div>
            {customers.map((customer) => (
                <div className="customer-card" key={customer._id}>
                    <img src={customer.pictures[0].url} alt="Teste"/>
                    
                    <div className="customer-info">
                        <header>
                            <h1>{customer.name.first} {customer.name.last}</h1>
                            <span>{customer.age} anos</span>
                            <h2>{customer.email}</h2>
                        </header>
                        <footer>
                            <h2>{customer.company}</h2>
                            <span>BUDGET: {customer.budget}</span>
                            <Link to={`/customers/${customer._id}`} className="enter-customer">
                                <BsFillPlusCircleFill size={26} color="#063057" />
                            </Link>
                        </footer>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CustomerCard;