import { useMemo } from "react"
import { OrderItem } from "../types"
import { formartCurrency } from "../helpers/helpers"

type OrderTotalProps = {
    order:OrderItem[]
}


export default function OrderTotal({order}:OrderTotalProps) {

    const subTotalAmount = useMemo(() => order.reduce((total,item)=> total + (item.quantity*item.price), 0),[order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Total y propina: </h2>

            <p>Cuenta:  {""}
                <span className="font-bold">{formartCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina:  {""}
                <span className="font-bold">$0</span>
            </p>

            <p>Total:  {""}
                <span className="font-bold">$0</span>
            </p>
        </div>

        <button>

        </button>
    </>
  )
}
