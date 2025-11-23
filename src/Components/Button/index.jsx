import style from './Button.module.css';

const Button = ({onClick, content, theme, title}) => {
  return (
    <button
      className={`${style.button} ${style[theme]}`}
      onClick={onClick}
      title={title}
    >
      {content}
    </button>
  );
};

export default Button;