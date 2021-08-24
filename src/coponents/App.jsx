import Painting from './Painting';
import paintings from '../paintings.json';

export default function App() {
  return (
    <Painting
      imageUrl={paintings[0].url}
      title={paintings[0].title}
      authorName={paintings[0].author.tag}
      authorUrl={paintings[0].author.url}
      price={paintings[0].price}
    />
  );
}
