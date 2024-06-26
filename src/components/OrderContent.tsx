import { formartCurrency } from "../helpers/helpers"
import { MenuItems, OrderItem } from "../types"

type OrderContentProps = {
  order : OrderItem[],
  removeItem: (id:MenuItems["id"]) => void
}

export default function OrderContent({order, removeItem} : OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-10">
        {order.map(item => (
              <div
              className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b" 
              key={item.id}
              >
                <div>
                  <p className="text-lg">
                    {item.name} - {formartCurrency(item.price)}
                  </p>

                  <p className="font-black">
                      Cantidad:{item.quantity} - {formartCurrency(item.quantity*item.price)}
                  </p>
                </div>
               

                <button
                  className="bg-red-600 h-8 w-8 rounded-full text-white"
                  onClick={()=>removeItem(item.id)}
                >
                  X
                </button>
              </div>
            ))
        }
      </div>
    </div>
  )
}

