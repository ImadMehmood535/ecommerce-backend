const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
} = require("../../constants/responses");
const productDto = require("../../dto/product");

const registerProduct = async (req, res) => {
  const { userId, name, price } = req.body;

  try {
    const existingProduct = await prisma.products.findFirst({
      where: {
        name,
        userId,
      },
    });

    if (existingProduct) {
      const response = forbiddenResponse(
        "Product already exists for this user"
      );
      return res.status(response.status.code).json(response);
    }

    const product = await prisma.products.create({
      data: {
        name,
        price,
        userId,
      },
    });

    const response = okResponse(
      productDto(product),
      "Product registered successfully"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = { registerProduct };
