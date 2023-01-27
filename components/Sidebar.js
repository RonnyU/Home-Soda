import Image from 'next/image';
import { useEffect } from 'react';
import useHomeSoda from '../hooks/useHomeSoda';
import Category from './Category';

const Sidebar = () => {
  const { categories } = useHomeSoda();

  return (
    <>
      <Image
        width={300}
        height={100}
        src='/assets/img/logo.svg'
        alt='image logo'
      />

      <nav className='mt-10'>
        {Array.isArray(categories) ? (
          categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))
        ) : (
          <p>No lo es</p>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
