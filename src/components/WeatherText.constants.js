const WEATHER_COMMENTS = [
  {
    text: 'Cold as F',
    condition: temperature => temperature <= 10,
  },
  {
    text: 'It is cold man',
    condition: temperature => temperature > 10 && temperature <= 15,
  },
  {
    text: 'Ehh its ok',
    condition: temperature => temperature > 15 && temperature <= 20,
  },
  {
    text: 'Thats what I call summer',
    condition: temperature => temperature > 20,
  },
];

export default WEATHER_COMMENTS;
