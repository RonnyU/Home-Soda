import AdminLayout from '../layout/AdminLayout';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import useHomeSoda from '../hooks/useHomeSoda';
import PendingOrders from '../components/PendingOrders';
import CompletedOrders from '../components/CompletedOrders';

import { ThreeCircles } from 'react-loader-spinner';

export default function Admin() {
  const {
    currentAdminCategory,
    isLoadingAdmin,
    setIsLoadingAdmin,
    token,
    setToken,
  } = useHomeSoda();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      let tk = JSON.parse(localStorage.getItem('token'));
      if (tk) {
        setToken(tk);
      } else {
        router.push('/');
      }
    }
  }, []);

  useEffect(() => {
    if (isLoadingAdmin) {
      const timer = setTimeout(() => {
        setIsLoadingAdmin(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoadingAdmin, setIsLoadingAdmin]);

  // Logout
  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
    router.push('/');
  };

  return (
    <AdminLayout page={'Admin'}>
      <div className='flex md:justify-end'>
        <button
          className=' text-2xl font-black bg-zinc-800 text-amber-400 px-10
         hover:text-amber-100 py-2 rounded-xl cursor-pointer'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <h1 className='text-4xl font-black'>Panel de Administración</h1>
      <p className='text-2xl my-10'>Administra las Ordernes</p>

      {isLoadingAdmin ? (
        <div className='flex justify-center items-center h-80'>
          <ThreeCircles
            height='100'
            width='100'
            color='#FBBF24'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='three-circles-rotating'
            outerCircleColor=''
            innerCircleColor=''
            middleCircleColor=''
          />
        </div>
      ) : currentAdminCategory === 1 ? (
        <PendingOrders />
      ) : (
        <CompletedOrders />
      )}
    </AdminLayout>
  );
}
