import AdminLayout from '../layout/AdminLayout';
import useSWR from 'swr';
import axios from 'axios';
import Order from '../components/Order';

export default function Admin() {
  const fetcher = () => axios('/api/orders').then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 100,
  });

  return (
    <AdminLayout page={'Admin'}>
      <h1 className='text-4xl font-black'>Panel de Administración</h1>
      <p className='text-2xl my-10'>Administra las Ordernes</p>

      {data && data.length ? (
        data.map((order) => <Order key={order.id} singleOrder={order} />)
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </AdminLayout>
  );
}
