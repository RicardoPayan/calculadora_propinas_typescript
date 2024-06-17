import { useMemo } from "react"
import { OrderItem } from "../types"
import { formartCurrency } from "../helpers/helpers"

type OrderTotalProps = {
    order:OrderItem[],
    tip:number,
    placeOrder:()=>void
}


export default function OrderTotal({order, tip, placeOrder}:OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((total,item)=> total + (item.quantity*item.price), 0),[order])

    const tipAmount = useMemo(() => subTotalAmount*tip,[tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total y propina: </h2>

            <p>Cuenta:  {""}
                <span className="font-bold">{formartCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina:  {""}
                <span className="font-bold">{formartCurrency(tipAmount)}</span>
            </p>

            <p>Total:  {""}
                <span className="font-bold">{formartCurrency(subTotalAmount+tipAmount)}</span>
            </p>
        </div>

        <button
            className="text-white font-bold mt-10  w-full bg-black p-3 uppercase disabled:opacity-10"
            disabled={subTotalAmount+tipAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
