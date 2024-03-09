const translateColor = (color: string): string => {
  if (color === 'blue') return 'синий';
  if (color === 'green') return 'зеленый';
  if (color === 'orange') return 'оранжевый';
  if (color === 'purple') return 'фиолетовый';
  if (color === 'red') return 'красный';
  if (color === 'white') return 'белый';
  if (color === 'yellow') return 'желтый';

  return '';
};

export default translateColor;
