import Image from 'next/image';
import { formatCurrency } from '../helpers/index';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Order({ singleOrder }) {
  const { id, name, total, order } = singleOrder;

  const FinishOrder = async () => {
    try {
      await axios.post(`/api/orders/${id}`);
      toast.success('Orden Lista');
    } catch (error) {
      toast.error('Ocurrio un error');
    }
  };

  return (
    <div className='border p-10 space-y-5'>
      <h1 className='text-2xl font-bold'>Orden: {id}</h1>
      <p className='text-lg font-bold'>Cliente: {name}</p>

      <div>
        {order.map((dish) => (
          <div
            key={dish.id}
            className='py-3 flex border-b last-of-type:border-0 items-center'
          >
            <div className='w-32'>
              <Image
                width={400}
                height={500}
                src={`/assets/img/${dish.img}.jpg`}
                alt={`Dish Image ${dish.name}`}
              />
            </div>

            <div className='p-5 space-y-2'>
              <h4 className='text-xl font-bold text-amber-500'>{dish.name}</h4>
              <p className='text-lg font-bold'>Cantidad: {dish.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='md:flex md:items-center md:justify-between my-10'>
        <p className='mt-5 font-black text-4xl text-amber-500'>
          Total a Pagar: {formatCurrency(total)}
        </p>
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 text-white 
                mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg'
          onClick={FinishOrder}
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
}
