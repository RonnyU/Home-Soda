import Image from 'next/image';
import { formatCurrency } from '../helpers';
import useHomeSoda from '../hooks/useHomeSoda';

const Product = ({ product }) => {
  const { name, img, price } = product;
  const { handleSetProduct, handleChangeModal } = useHomeSoda();
  return (
    <div className='border p-3'>
      <Image
        src={`/assets/img/${img}.jpg`}
        alt={`Imagen de comida ${name}`}
        width={400}
        height={500}
      />
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          {formatCurrency(price)}
        </p>

        <button
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
