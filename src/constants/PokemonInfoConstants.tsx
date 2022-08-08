import { GiWeight } from 'react-icons/gi';
import { FaRulerVertical } from 'react-icons/fa';
import { BsFillLightningChargeFill } from 'react-icons/bs';

export const pokemonInfoDataKeys = {
  HEIGHT: 'HEIGHT',
  WEIGHT: 'WEIGHT',
  EXPERIENCE: 'EXPERIENCE'
};

export const pokemonInfoDataToRender = {
  [pokemonInfoDataKeys.HEIGHT]: {
    label: 'Height',
    icon: <GiWeight />,
    measure: 'm'
  },
  [pokemonInfoDataKeys.WEIGHT]: {
    label: 'Weight',
    icon: <FaRulerVertical />,
    measure: 'kg'
  },
  [pokemonInfoDataKeys.EXPERIENCE]: {
    label: 'Experience',
    icon: <BsFillLightningChargeFill />,
    measure: 'xp'
  }
};
