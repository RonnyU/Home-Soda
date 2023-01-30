import useSWR from 'swr';
import axios from 'axios';
import Order from '../components/Order';

const CompletedOrders = () => {
  const fetcher = () =>
    axios('/api/orders', {
      params: {
        type: 'completed',
      },
    }).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/orders', fetcher, {
    refreshInterval: 100,
  });

  return (
    <>
      {data && data.length ? (
        data.map((order) => <Order key={order.id} singleOrder={order} />)
      ) : (
        <p>No hay ordenes completadas aun</p>
      )}
    </>
  );
};

export default CompletedOrders;
