

const productDto = (product) => {
    return {
      userId: product?.userId,
      email: product?.email,
      name: product?.name,
    };
  };
  
  module.exports = productDto;
  