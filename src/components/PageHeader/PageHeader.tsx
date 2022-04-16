import React from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useMenuContext } from '../../shared/contexts/MenuContext';
import Logo from '../../elements/Logo';

import { ReactComponent as SearchIcon } from '../../assets/static/images/Search.svg';

import s from './PageHeader.module.css';

const PageHeader: React.FC = () => {
  const { menuOpen, setMenuOpen } = useMenuContext();
  const burgerClasses = clsx(s['PageHeader-topLeft-button'], menuOpen ? s['is-Active'] : '');

  const searchForm = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      console.info(values);
    },
  });

  const changeMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={s['PageHeader']}>
      <div className={s['PageHeader-top']}>
        <div className={s['PageHeader-topLeft']}>
          <button className={burgerClasses} type="button" onClick={changeMenu}>
            <span />
            <span />
            <span />
          </button>
          <div className={s['PageHeader-logo']}>
            <Logo />
          </div>
          <form onSubmit={searchForm.handleSubmit} className={s['PageHeader-search']}>
            <input
              {...searchForm.getFieldProps('search')}
              className={s['PageHeader-searchField']}
              type="text"
              name="search"
              placeholder="Placeholder"
            />
            <button className={s['PageHeader-searchButton']} aria-label="Label" type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
