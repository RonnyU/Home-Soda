import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useHomeSoda from '../hooks/useHomeSoda';
import Category from './Category';

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState();
  const { categories } = useHomeSoda();
  const router = useRouter();
  useEffect(() => {
    setIsAdmin(localStorage.getItem('token'));
  }, []);

  const handleClick = () => {
    if (!isAdmin) {
      router.push('/login');
    } else {
      router.push('/admin');
    }
  };

  return (
    <>
      <div className='flex justify-between'>
        <Image
          width={300}
          height={100}
          src='/assets/img/logo.svg'
          alt='image logo'
          priority={true}
        />
        <div className='mt-10 mr-10'>
          <button
            className={`${
              isAdmin ? 'text-sm' : 'text-2xl'
            } font-black bg-zinc-800 text-amber-400 px-10 
            hover:text-amber-100 py-2 rounded-xl cursor-pointer`}
            onClick={handleClick}
          >
            {isAdmin ? 'Admin Page' : 'Login'}
          </button>
        </div>
      </div>

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
