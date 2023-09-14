import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

function ShoppingList() {
    const [items, setItems] = useState([{ id: uuid(), product: "banana", quantity: 5 }, { id: uuid(), product: "Eggs", quantity: 6 }])
    const addItem = (Items) => {
        if (!Items.product) {
            return
        }
        setItems(currItem => { return [...currItem, { ...Items, id: uuid() }] })
    }
    return (
        <div>
            <ShoppingListForm addItem={addItem} />
            <h2>Items in the Shopping List</h2>
            <ul>
                {items.map((i) => (
                    <li>{i.product} - {i.quantity}</li>
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList;