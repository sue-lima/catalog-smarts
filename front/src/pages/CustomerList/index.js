import React, { useState, useEffect }  from 'react';
import TopHeader from '../../components/TopHeader'
import CustomerCard from '../../components/CustomerCard';
import api from '../../services/api'
import { BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs'

import './styles.css';

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [idate, setIdate] = useState('');
  const [edate, setEdate] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [refresh, setRefresh] = useState(false);

    useEffect(() => {
      if (filter === "MenorBudget") {
        MenorBudget();
      }else if (filter === "MaiorBudget") {
        MaiorBudget();
      }else if (filter === "AZ") {
        AZ();
      }else if (filter === "ZA") {
        ZA();
      }else if (filter === "Filter") {
        setRefresh(false);
        console.log('Tentando filtrar');
        api.get('/customers').then((response) => {
          const customers = response.data;
          Filter(customers);
        });
      }else{
        api.get(`/customers?_page=${page}&_limit=10`).then((response) => {
          setCustomers(response.data);
        });
      }
    }, [page, filter, refresh]); //eslint-disable-line

    useEffect(() => {
      setPage(1);
    }, [filter, idate, edate]);

  function MenorBudget() {
    api.get(`/customers/?_sort=budget&_order=asc&_page=${page}&_limit=10`).then((response) => {
      setCustomers(response.data);
    });
  }

  function MaiorBudget() {
    api.get(`/customers/?_sort=budget&_order=desc&_page=${page}&_limit=10`).then((response) => {
      setCustomers(response.data);
    });
  }

  function AZ() {
    api.get(`/customers/?_sort=name.first&_order=asc&_page=${page}&_limit=10`).then((response) => {
      setCustomers(response.data);
    });
  }

  function ZA() {
    api.get(`/customers/?_sort=name.first&_order=desc&_page=${page}&_limit=10`).then((response) => {
      setCustomers(response.data);
    });
  }

  function Filter(customers) {
    const customersWithinDate = customers.filter(customer => new Date(customer.registered) >= new Date(idate))
    .filter(customer => new Date(customer.registered) <= new Date(edate));
    const beginning = (page - 1) * 10;
    console.log(beginning);

    const customersSlice = customersWithinDate.slice(beginning, beginning + 10);
    console.log(customersSlice);
    setCustomers(customersSlice);
  }

 function Filtrar() {
  setFilter("Filter");
  setRefresh(true);
 } 

  return (
    <div id="customer-page">
        <TopHeader title="Visualize os clientes abaixo">
          <div>
            <div id="search-customers">
              <button onClick={() => setFilter("MenorBudget")}>Menor Budget</button>
              <button onClick={() => setFilter("MaiorBudget")}>Maior Budget</button>
              <button onClick={() => setFilter("AZ")}>A-Z</button>
              <button onClick={() => setFilter("ZA")}>Z-A</button>
            </div>

            <div id="search-dates">
              <label>De:</label>
              <input type="date" value={idate} onChange={e => setIdate(e.target.value)}></input>
              <label>Até:</label>
              <input type="date" value={edate} onChange={e => setEdate(e.target.value)}></input>
              <button onClick={Filtrar}>Filtrar</button>
            </div>
          </div>
        </TopHeader>
        
        <main>
          <CustomerCard customers={customers}/>
        </main>

        <footer>
          <div id="page-controller">
              <button onClick={() => setPage(page-1)}><BsFillCaretLeftFill size={46} color="#063057"/></button>
              <button onClick={() => setPage(page+1)}><BsFillCaretRightFill size={46} color="#063057"/></button>
          </div>
        </footer>
    </div>
  );
}

export default CustomerList;