import { useContext } from 'react';
import HomeSodaContext from '../context/HomeSodaProvider';

const useHomeSoda = () => {
  return useContext(HomeSodaContext);
};

export default useHomeSoda;
