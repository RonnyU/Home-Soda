import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const HomeSodaContext = createContext();

const HomeSodaProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const getCategories = async () => {
    const {
      data: { categories },
    } = await axios.get('/api/categories');

    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (id) => {
    const category = categories.filter((ctg) => ctg.id === id);
    setCurrentCategory(category[0]);
    router.push('/');
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = ({ categoryId, ...orderProduct }) => {
    if (order.some((productState) => productState.id === orderProduct.id)) {
      const updateOrder = order.map((productState) =>
        productState.id === orderProduct.id ? orderProduct : productState
      );

      setOrder(updateOrder);
      toast.success('📝 Guardado correctamente!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      setOrder([...order, orderProduct]);
      toast.success('📝 Agregado al pedido!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const productUpdated = order.filter((product) => product.id === id);
    setProduct(productUpdated[0]);
    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    const orderUpdated = order.filter((product) => product.id !== id);
    setOrder(orderUpdated);
  };

  const handleSendOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders', {
        order,
        name,
        total,
        date: Date.now().toString(),
      });

      //reset app

      setCurrentCategory(categories[0]);
      setOrder([]);
      setName('');
      setTotal(0);

      toast.success('Pedido Realizado Correctamente');

      setTimeout(() => {
        router.push('/');
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeSodaContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
        order,
        handleEditQuantity,
        handleDeleteProduct,
        name,
        setName,
        handleSendOrder,
        total,
      }}
    >
      {children}
    </HomeSodaContext.Provider>
  );
};

export { HomeSodaProvider };
export default HomeSodaContext;
