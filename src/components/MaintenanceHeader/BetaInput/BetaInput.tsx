import { useFormik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import toast from 'react-hot-toast';
import Button from '../../../elements/Button';
import s from './BetaInput.module.css';

export type Props = {
  headline: string;
  description: string;
  ctaText: string;
};

const BetaInput: React.FC<Props> = ({ headline, description, ctaText }) => {
  const { t } = useTranslation('maintenance');

  const form = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: () => {
      toast.error(t('not_available'));
    },
  });

  return (
    <div className={s['BetaInput']}>
      <h1 className={`${s['BetaInput-headline']} title`}>{headline}</h1>
      <p className={s['BetaInput-description']}>{description}</p>
      <form className={s['BetaInput-form']} onSubmit={form.handleSubmit}>
        <input
          disabled
          className={s['BetaInput-element']}
          id="code"
          name="code"
          placeholder={t('insert_code')}
          type="text"
          onChange={form.handleChange}
          value={form.values.code}
        />
        <Button className={s['BetaInput-button']}>{ctaText}</Button>
      </form>
      <p className={s['BetaInput-info']}>{t('not_enabled')}</p>
    </div>
  );
};

export default BetaInput;
