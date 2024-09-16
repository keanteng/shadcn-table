import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="flex justify-center items-center w-full py-10 px-5">
      <div className="w-[calc(100vw-4rem)]">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728e3d52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
        id: "728ed352g",
        amount: 200,
        status: "processing",
        email: "d@my.a"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52g",
      amount: 200,
      status: "processing",
      email: "d@my.a",
    },
    {
      id: "728ed52h",
      amount: 150,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52i",
      amount: 250,
      status: "failed",
      email: "b@example.com",
    },
    {
      id: "728ed52j",
      amount: 300,
      status: "pending",
      email: "c@example.com",
    },
    {
      id: "728ed52k",
      amount: 400,
      status: "processing",
      email: "e@example.com",
    },
    {
      id: "728ed52l",
      amount: 500,
      status: "pending",
      email: "f@example.com",
    },
    {
      id: "728ed52m",
      amount: 600,
      status: "failed",
      email: "g@example.com",
    },
    {
      id: "728ed52n",
      amount: 700,
      status: "pending",
      email: "h@example.com",
    },
    {
      id: "728ed52o",
      amount: 800,
      status: "processing",
      email: "i@example.com",
    },
    {
      id: "728ed52p",
      amount: 900,
      status: "pending",
      email: "j@example.com",
    },
    {
      id: "728ed52q",
      amount: 1000,
      status: "failed",
      email: "k@example.com",
    },
  ]
}
