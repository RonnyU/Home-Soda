import Image from 'next/image';
import useHomeSoda from '../hooks/useHomeSoda';

const Category = ({ category }) => {
  const { currentCategory, handleClickCategory } = useHomeSoda();
  const { name, icon, id } = category;
  return (
    <div
      className={`${
        currentCategory?.id === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt='img icon'
      />
      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => handleClickCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default Category;
