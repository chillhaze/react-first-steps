import Section from './Section';
import PaintingList from './PaintingList';
import paintings from '../paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section />
      <Section />
    </div>
  );
}
