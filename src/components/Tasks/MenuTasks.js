import React from 'react';
import { Link } from 'react-router-dom';
import { InputSearch } from '../Shared/InputSearch/InputSearch';

export const MenuTasks = () => {
  return (
    <div>
      <div className="menu">
        <div>
          <InputSearch />
        </div>
        <div>
          <label htmlFor="filter" className="dropdown">
            <div className="dd-button">
              <span>
                <i className="fas fa-filter" />
                Filter by
              </span>
            </div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
              <li>Priority</li>
              <li>Status</li>
              <li className="divider" />
            </ul>
          </label>

          <label htmlFor="sort" className="dropdown">
            <div className="dd-button">
              <span>
                <i className="fas fa-sort-alpha-up" />
                Sort
              </span>
            </div>

            <input type="checkbox" className="dd-input" id="test" />

            <ul className="dd-menu">
              <li>Name</li>
              <li>Date</li>
              <li className="divider" />
            </ul>
          </label>
          <Link
            to="/tasks/add"
            className="btn btn-primary rounded"
            id="btn-add"
          >
            <span>
              <i className="fas fa-plus-circle" />
            </span>
            Add Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuTasks;
