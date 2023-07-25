import React from "react";
import { Link, Outlet } from "react-router-dom";
import ostad from "/ostad.png";
const App = () => {
  return (
    <div>
      <div className="shadow-md p-4">
        <div className="container mx-auto font-Orbitron font-bold">
          <header className="mx-2">
            <nav className="flex justify-between items-center">
              <img src={ostad} alt="" />
              <ul className="flex gap-4">
                <li>
                  <Link to="/">Income</Link>
                </li>
                <li>
                  <Link to="/expense">Expense</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
