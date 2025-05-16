import css from './RentForm.module.css';

const RentForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    //  write logic ..... or we can use another library for work with form
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your car now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name*" className={css.inputField} />
        <input type="email" placeholder="Email*" className={css.inputField} />
        <input
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => e.target.value === '' && (e.target.type = 'text')}
          placeholder="Booking date"
          className={css.inputField}
        />
        <textarea placeholder="Comment" className={css.textareaField} />
        <button type="submit" className={`${css.sendButton} blue-btn`}>
          Send
        </button>
      </form>
    </div>
  );
};

export default RentForm;
