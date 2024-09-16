import { productData } from "@/lib/products-data";

export default function ProductTable() {
  const products = productData;
  return (
    <div className="w-[calc(100vw-5rem)] overflow-x-auto justify-center">
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index} className="text-3xl">
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.unit}</td>
                        <td>{product.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}