import React from 'react';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useMenuContext } from '../../shared/contexts/MenuContext';
import { PageHeaderNav } from '../../shared/interfaces/PageHeaderItem';
import Logo from '../../elements/Logo';

import { ReactComponent as SearchIcon } from '../../assets/static/images/Search.svg';

import s from './PageHeader.module.css';
import List from './List';

export type Props = {
  items: PageHeaderNav;
};

const PageHeader: React.FC<Props> = ({ items }) => {
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
    <header className={`${s['PageHeader']} u-grid`}>
      <div className={`${s['PageHeader-topLeft']} u-grid`}>
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
            placeholder="Suche hier nach Usern oder Gruppen..."
          />
          <button className={s['PageHeader-searchButton']} aria-label="Label" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className={`${s['PageHeader-topRight']} u-grid`}>
        <List main={items.main} secondary={items.secondary} />
      </div>
    </header>
  );
};

export default PageHeader;
