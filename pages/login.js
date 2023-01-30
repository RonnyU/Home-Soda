import useHomeSoda from '../hooks/useHomeSoda';
import BackArrow from '../components/Icons/BackArrow';
import { useRouter } from 'next/router';

export default function Login() {
  const { handleLogin, user, setUser } = useHomeSoda();
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className='bg-gradient-to-r from-amber-400 via-white to-amber-500'>
      <button className='ml-5' onClick={handleBack}>
        <BackArrow width={80} height={80} />
      </button>
      <div
        className='flex justify-center items-center h-screen 
    '
      >
        <form
          className='bg-amber-500 rounded-lg md:w-1/4 shadow-md'
          onSubmit={handleLogin}
        >
          <div className='m-5'>
            <label htmlFor='name' className='text-xl font-bold'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              className='rounded-md block p-2 mt-2 w-full shadow'
              placeholder='Type your user name'
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className='m-5'>
            <label htmlFor='password' className='text-xl font-bold'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              className='rounded-md block p-2 mt-2 w-full shadow'
              placeholder='Type your password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div className='mx-5 my-8'>
            <input
              type='submit'
              className='py-2 text-white font-bold text-2xl bg-zinc-800 hover:bg-zinc-900 rounded-md w-full'
              value='Entrar'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
