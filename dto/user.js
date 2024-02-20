

const user_dto = (user) => {
  return {
    id: user?.id,
    email: user?.email,
    name: user?.name,
  };
}

const user_products = (data) => {
  return {
    userId: data?.userId,
    products: data?.products.map(item => ({
      title: item.name,
      price: item.price
    }))
  };
};


module.exports = {user_dto , user_products};
