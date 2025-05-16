import { showToastSuccessMessage } from '../../utils/toastMessages.js';
import css from './RentForm.module.css';

const RentForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    //  write logic ..... or we can use another library for work with form
    showToastSuccessMessage('Successfully rent a car!');
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Name*"
          className={css.inputField}
        />
        <input
          type="email"
          name="userEmail"
          placeholder="Email*"
          className={css.inputField}
        />
        <input
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => e.target.value === '' && (e.target.type = 'text')}
          name="date"
          placeholder="Booking date"
          className={css.inputField}
        />
        <textarea
          placeholder="Comment"
          name="userComment"
          className={css.textareaField}
        />
        <button type="submit" className={`${css.sendButton} blue-btn`}>
          Send
        </button>
      </form>
    </div>
  );
};

export default RentForm;
