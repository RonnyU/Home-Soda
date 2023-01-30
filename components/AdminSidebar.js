import Image from 'next/image';
import useHomeSoda from '../hooks/useHomeSoda';

const AdminSidebar = ({ field }) => {
  const { id, name, icon } = field;
  const { currentAdminCategory, handleClickAdminCategory } = useHomeSoda();

  return (
    <div
      className={`${
        currentAdminCategory === id ? 'bg-amber-400' : ''
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/${icon}`}
        alt='img icon'
      />
      <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => handleClickAdminCategory(id)}
      >
        {name}
      </button>
    </div>
  );
};

export default AdminSidebar;
