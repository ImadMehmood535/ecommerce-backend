const { prisma } = require("../../configs/prisma");
const {
  serverErrorResponse,
  okResponse,
  forbiddenResponse,
} = require("../../constants/responses");
const { user_dto, user_products } = require("../../dto/user");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
    if (user) {
      const response = forbiddenResponse("User Already registered");
      return res.status(response.status.code).json(response);
    }
    if (!user) {
      user = await prisma.users.create({
        data: {
          email,
          password,
          name,
        },
      });
    }

    const response = okResponse(user_dto(user), "User created successfully");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

const findUserProducts = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: parseInt(userId),
      },
      include: {
        products: true,
      },
    });

    if (!user) {
      const response = forbiddenResponse("User not found");
      return res.status(response.status.code).json(response);
    }

    const response = okResponse(
      user_products({ userId, products: user.products }),
      "User products found successfully"
    );
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

module.exports = { registerUser, findUserProducts };
