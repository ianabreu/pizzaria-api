import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}
const FinishOrderService = {
  execute: async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    });
    return order;
  },
};

export { FinishOrderService };
