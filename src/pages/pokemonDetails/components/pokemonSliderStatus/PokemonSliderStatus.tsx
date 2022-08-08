import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Content, Value, ValueName } from './styles';

type PokemonSliderStatusProps = {
  status: string;
  value: number;
  color: string;
};

const PokemonSliderStatus = ({ status, value, color }: PokemonSliderStatusProps) => {
  return (
    <Content>
      <ValueName style={{ width: 150, color: `${color}` }}>{status.toUpperCase()}</ValueName>
      <Value>{value.toString().padStart(3, '0')}</Value>
      <Slider
        value={value}
        handleStyle={{ display: 'none' }}
        style={{ backgroundColor: 'transparent' }}
        max={200}
        min={0}
        disabled
        trackStyle={{ backgroundColor: `${color}` }}
      />
    </Content>
  );
};

export { PokemonSliderStatus };
