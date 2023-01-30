export const formatCurrency = (money) => {
  return money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const adminFields = () => {
  return [
    {
      id: 1,
      name: 'Ordenes Pendientes',
      icon: 'icon_clock.svg',
    },
    {
      id: 2,
      name: 'Ordenes Completadas',
      icon: 'icon_list.svg',
    },
  ];
};
