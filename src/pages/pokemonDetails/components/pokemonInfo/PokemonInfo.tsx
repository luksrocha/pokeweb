import { Container, InfoArea, Label, TextValue } from './styles';
import { pokemonInfoDataToRender } from '../../../../constants/PokemonInfoConstants';

type PokemonInfoProps = {
  value: string | number;
  variant: keyof typeof pokemonInfoDataToRender;
};

const PokemonInfo = ({ value, variant }: PokemonInfoProps) => {
  const { icon, label, measure } = pokemonInfoDataToRender[variant];

  return (
    <Container>
      <InfoArea>
        {icon}
        <TextValue>{`${value} ${measure}`}</TextValue>
      </InfoArea>
      <Label>{label}</Label>
    </Container>
  );
};

export { PokemonInfo };
