import PropTypes from 'prop-types';
import defaultImage from '../images/default.jpg';

const Painting = props => {
  // Или деструктуризация сразу в аргументах
  const {
    imageUrl = defaultImage,
    title,
    authorName = 'name unknown',
    authorUrl,
    price,
    quantity,
  } = props;
  return (
    <div>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

Painting.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
