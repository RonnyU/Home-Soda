import Layout from '../layout/Layout';
import useHomeSoda from '../hooks/useHomeSoda';
import ProductSummary from '../components/ProductSummary';

export default function Summary() {
  const { order } = useHomeSoda();
  return (
    <Layout page='Resumen'>
      <h1 className='text-4xl font-black'>Resumen</h1>
      <p className='text-2xl my-10'>Revisa tu pedido</p>

      {order.length === 0 ? (
        <p className='text-center text-2xl'>No hay elementos en tu pedido</p>
      ) : (
        order.map((product) => (
          <ProductSummary key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
