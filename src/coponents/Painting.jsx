import defaultImage from '../images/default.jpg';
console.log(defaultImage);

const Painting = props => {
  // Или деструктуризация сразу в аргументах
  const { imageUrl = defaultImage, title, authorName = 'name unknown', authorUrl, price } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
};

export default Painting;
