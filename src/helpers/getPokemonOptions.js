import pokeApi from '@/api/pokeApi';

const createArray = () => {
  const pokArray = Array.from(Array(605));
  return pokArray.map((num, index) => index + 1);
};

const getPokemonOptions = async () => {
  const mixArray = createArray().sort(() => Math.random() - 0.5);
  const spliceArray = mixArray.splice(0, 4);
  const finalArray = await getPokemonNames(spliceArray);
  return finalArray;
};

const getPokemonNames = async (finalArray) => {
  const [a, b, c, d] = finalArray;
  const promisseArray = [
    pokeApi.get(`/${a}`),
    pokeApi.get(`/${b}`),
    pokeApi.get(`/${c}`),
    pokeApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promisseArray);
  return [
    {
      name: p1.data.name,
      id: p1.data.id,
    },
    {
      name: p2.data.name,
      id: p2.data.id,
    },
    {
      name: p3.data.name,
      id: p3.data.id,
    },
    {
      name: p4.data.name,
      id: p4.data.id,
    },
  ];
};
export default getPokemonOptions;
