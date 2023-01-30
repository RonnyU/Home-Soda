import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSidebar from '../components/AdminSidebar';
import { adminFields } from '../helpers/index';

export default function AdminLayout({ children, page }) {
  const fields = adminFields();
  const router = useRouter();

  const handleImgClick = () => {
    router.push('/');
  };
  return (
    <>
      <Head>
        <title>{`Café - ${page}`}</title>
        <meta name='description' content='Home Café and restaurant' />
      </Head>

      <div className='md:flex'>
        <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5'>
          <Image
            width={400}
            height={200}
            src='/assets/img/logo.svg'
            alt='imagen logotipo'
            priority={true}
            onClick={handleImgClick}
            className='cursor-pointer'
          />

          <nav className='mt-10'>
            {fields.map((field) => (
              <AdminSidebar key={field.id} field={field} />
            ))}
          </nav>
        </aside>

        <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
          <div className='p-10'>{children}</div>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}
