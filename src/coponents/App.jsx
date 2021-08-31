import Section from './Section/Section';
import PaintingList from './Painting/PaintingList';
import paintings from '../coponents/paintings.json';

import { ColorPicker } from './ColorPicker/ColorPicker';

import { Alert } from './Alert/Alert';

import { Box } from './Box/Box';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div>
      <Section title="Box">
        <Box />
      </Section>
      <Section title="Alert">
        <Alert text="Carramba!" type="success" />
        <Alert text="Carramba!" type="warning" />
        <Alert text="Carramba!" type="error" />
      </Section>
      <Section title="Color Picker">
        <ColorPicker options={colorPickerOptions} />
      </Section>
      <Section title="Painting List">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
