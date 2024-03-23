import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';


export const Form = ({ onSearch }) => {
  const [formValue, setFormValue] = useState('');
  const onChangeFormValue = evt => {
    setFormValue(evt.target.value);
  };
  const onHandleSubmit = evt => {
    evt.preventDefault();
    onSearch(formValue);
    setFormValue('');
  };
  return (
    <form className={style.form} onSubmit={onHandleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={onChangeFormValue}
        value={formValue}
      />
    </form>
  );
};
