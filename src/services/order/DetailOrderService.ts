import prismaClient from "../../prisma";

interface OrderRequest {
  order_id: string;
}
const DetailOrderService = {
  execute: async ({ order_id }: OrderRequest) => {
    const order = await prismaClient.item.findMany({
      where: {
        order_id: order_id,
      },
      include: {
        product: true,
        order: true,
      },
    });
    return order;
  },
};
export { DetailOrderService };
