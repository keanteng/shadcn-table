import ProductTable from "@/components/products/product-table"
import { productData } from "@/lib/products-data"
import {columns} from '@/components/products/columns'
import { DataTable } from "@/components/products/data-table"

export default function Products() {
    const data = productData
    return (
        <div className="flex flex-col w-auto">
            <div className="flex flex-col gap-0.5">
                <h1 className="text-3xl font-bold">
                    Products
                </h1>
                <p className="text-md text-gray-500">
                    Here you can manage your products
                </p>
            </div>
            <span className="border-b border-gray-300 my-6"></span>
            <div>
                <DataTable columns={columns} data={data} />
            </div>
        </div>

    )
}