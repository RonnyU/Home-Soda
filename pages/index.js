import Layout from '../layout/Layout';
import Product from '../components/Product';
import useHomeSoda from '../hooks/useHomeSoda';

export default function Home() {
  const { currentCategory } = useHomeSoda();

  return (
    <Layout page={`Menu ${currentCategory?.name}`}>
      <h1 className='text-4xl font-black'>{currentCategory?.name}</h1>
      <p className='text-2xl my-10'>Selecciona tu orden abajo</p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {currentCategory?.products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}

/* export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
}; */
