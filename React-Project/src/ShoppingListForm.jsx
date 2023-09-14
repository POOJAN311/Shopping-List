import { useState } from "react";

function ShoppingListForm({ addItem }) {
    const [Item, setItem] = useState({ product: "", quantity: 0 })
    const [productIsvalid, setProductIsvalid] = useState(false);

    const validate = (product) => {
        if (product.length === 0) {
            setProductIsvalid(false)
        } else {
            setProductIsvalid(true)
        }
    }
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value)
        }
        setItem(currItem => {
            return { ...Item, [evt.target.name]: evt.target.value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsvalid) {
            addItem(Item);
            setItem({ product: "", quantity: 0 });
        }
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Shopping List</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="product">Product Name</label><br />
                <input type="text" id="product" name="product" value={Item.product} onChange={handleChange} placeholder="Enter product" />
                {!productIsvalid && <p style={{ color: "red" }}>Product name cannot be empty</p>}
                <br />
                <label htmlFor="quantity">Quantity</label><br />
                <input type="number" id="quantity" name="quantity" value={Item.quantity} onChange={handleChange} placeholder="Enter quantity" />
                <br />
                <button disabled={!productIsvalid} onClick={handleSubmit}>Add Item</button>
                <hr />
            </form>
        </div >
    )
}
export default ShoppingListForm;