import css from './ColorPicker.module.css';

export const ColorPicker = ({ options }) => {
  return (
    <div className={css.ColorPicker}>
      {/* <h2 className={css.title}>Color Picker</h2> */}
      <div>
        {options.map(option => (
          <span
            key={option.label}
            className={css.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
};
