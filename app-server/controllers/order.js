import Order from "../models/order";
import { sendMailWithOrder } from '../services/sendMailWithOrder';

export async function create(req, resp, next) {
    var order = req.body;
    try {
        var order = await Order.create(order);
        console.log(order, 'Order');

        setTimeout(()=>{
            sendMailWithOrder({email: undefined, order: order});
        },0)
    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }
    resp.json(order);
}

