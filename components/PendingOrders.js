import useSWR from 'swr';
import axios from 'axios';
import Order from '../components/Order';

const PendingOrders = () => {
  const fetcher = () =>
    axios('/api/orders', {
      params: {
        type: 'pending',
      },
    }).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 100,
  });

  return (
    <>
      {data && data.length ? (
        data.map((order) => (
          <Order key={order.id} singleOrder={order} tab={'pending'} />
        ))
      ) : (
        <p>No hay ordenes pendientes</p>
      )}
    </>
  );
};

export default PendingOrders;
