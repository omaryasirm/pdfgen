"use client";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  const searchInvoice = searchParams.get("invoice");

  let tempInvoice = {
    id: "f0c4d333-02f1-4401-9bf5-61abc4515338",
    invoiceNo: 34,
    type: "INVOICE",
    name: "Omar",
    phone: "12345632",
    registrationNo: "LED-123",
    vehicleModel: "Honda Civic",
    vehicleColor: "white",
    subtotal: 2200388,
    tax: 0,
    discount: 10,
    discountType: "PERCENTAGE",
    total: 1980349,
    paid: 0,
    balance: 1980349,
    companyId: "c532c3d2-2231-4a2e-93b0-7e33605ea1d9",
    customerId: "5d704303-d52e-4146-9a76-17a7bcd6a362",
    vehichleId: "2e0901c9-1a96-4907-a453-8f2f255e4aaa",
    userId: "a8e96b34-3a66-479a-b4e6-ec776946577f",
    createdAt: "2024-10-03T23:09:31.032Z",
    updatedAt: "2024-10-03T18:19:21.675Z",
    serviceRecords: [
      {
        id: "51ff89ed-0ac4-4e63-88d8-20f056af421d",
        name: "Car service 1",
        description: "",
        qty: 1,
        rate: 1000148,
        total: 1000148,
        invoiceId: "f0c4d333-02f1-4401-9bf5-61abc4515338",
        serviceId: "f9280c04-3fc2-459f-a997-69bbac3dfe6d",
        createdAt: "2024-10-03T23:19:21.680Z",
        updatedAt: "2024-10-03T23:19:21.680Z",
      },
      {
        id: "65764c0f-b829-414f-b03e-f7c7664386e3",
        name: "Car service 2",
        description: "",
        qty: 12,
        rate: 100020,
        total: 1200240,
        invoiceId: "f0c4d333-02f1-4401-9bf5-61abc4515338",
        serviceId: "62e170b4-54ff-45d7-9ba0-993b4f24f6c6",
        createdAt: "2024-10-03T23:19:21.680Z",
        updatedAt: "2024-10-03T23:19:21.680Z",
      },
      {
        id: "65764c0f-b829-414f-b03e-f7c7664386e3",
        name: "Car service 2",
        description: "",
        qty: 12,
        rate: 100020,
        total: 1200240,
        invoiceId: "f0c4d333-02f1-4401-9bf5-61abc4515338",
        serviceId: "62e170b4-54ff-45d7-9ba0-993b4f24f6c6",
        createdAt: "2024-10-03T23:19:21.680Z",
        updatedAt: "2024-10-03T23:19:21.680Z",
      },
      {
        id: "65764c0f-b829-414f-b03e-f7c7664386e3",
        name: "Car service 2",
        description: "",
        qty: 12,
        rate: 100020,
        total: 1200240,
        invoiceId: "f0c4d333-02f1-4401-9bf5-61abc4515338",
        serviceId: "62e170b4-54ff-45d7-9ba0-993b4f24f6c6",
        createdAt: "2024-10-03T23:19:21.680Z",
        updatedAt: "2024-10-03T23:19:21.680Z",
      },
    ],
  };

  const invoice: any =
    searchInvoice != null ? JSON.parse(searchInvoice) : tempInvoice;

  // console.log(invoice);

  return (
    <main>
      <div className="max-w-screen-md">
        <div className="flex justify-between px-3">
          <div className="flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/vemessage-images/incidents/1727980857086-profix_wb_logo.png"
              className="h-20"
              alt="Logo"
            />
          </div>
          <div className="ml-4 flex flex-col items-end">
            <p className="text-3xl mb-7 font-bold">Workshop Invoice</p>
            <div className="flex text-sm">
              <div className="mr-10">
                <p className="text-gray-400">Invoice no:</p>
                <p className="text-gray-400">Invoice date:</p>
                <p className="text-gray-400">Due:</p>
              </div>
              <div className="text-right">
                <p className="">{invoice["invoiceNo"]}</p>
                <p className="">
                  {new Date(invoice["createdAt"]).toDateString()}
                </p>
                <p className="">
                  {new Date(invoice["createdAt"]).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 mb-4 px-3">
          <div className="text-gray-700 text-sm">
            <p className="text-xs font-bold text-gray-800">From</p>
            <p className="text-lg font-bold text-gray-800 mb-2">
              Profix Garage
            </p>
            <p>John Smith</p>
            <p>wiz@saldoapps.com</p>
            <p>80296979597</p>
            <p>First str, 28-32, Chicago, USA</p>
          </div>
          <div className="text-right text-sm text-gray-700">
            <p className="text-xs font-bold text-gray-800">Bill to</p>
            <p className="text-lg font-bold text-gray-800 mb-2">
              {invoice["name"]}
            </p>
            <p>{invoice["phone"]}</p>
            <p>{invoice["registrationNo"]}</p>
            <p>{invoice["vehicleModel"]}</p>
            <p>{invoice["vehicleColor"]}</p>
          </div>
        </div>

        <table className="min-w-full divide-y divide-gray-300 mt-10">
          <thead>
            <tr className="bg-gray-300">
              <th className="pl-3 uppercase py-3.5 text-left text-sm font-semibold text-gray-900">
                #
              </th>
              <th className="uppercase py-3.5 text-left text-sm font-semibold text-gray-900 w-[60%]">
                Description
              </th>
              <th className="uppercase py-3.5 text-left text-sm font-semibold text-gray-900">
                Rate
              </th>
              <th className="uppercase py-3.5  text-sm font-semibold text-gray-900">
                Qty
              </th>
              <th className="pr-3 uppercase py-3.5 text-right text-sm font-semibold text-gray-900">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoice["serviceRecords"].map((service: any, index: number) => (
              <tr key={index}>
                <td className="pl-3 py-4 pr-10 text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="py-4 pr-10 text-sm text-gray-500">
                  {service["name"]}
                </td>
                <td className="py-4 text-sm text-gray-500">
                  {service["rate"].toLocaleString()}
                </td>
                <td className="py-4 text-sm text-center text-gray-500">
                  {service["qty"]}
                </td>
                <td className="pr-3 py-4 text-sm text-right text-gray-500">
                  {service["total"].toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-5">
          <div className="px-3">
            <p className="text-gray-800 font-bold mb-4">Payment instruction</p>
            <p className="text-gray-700  text-sm">Bank</p>
            <p className="text-gray-600 text-sm">Meezan bank</p>
            <p className="text-gray-700  text-sm mt-2">Account</p>
            <p className="text-gray-600 text-sm">13412353125325</p>
            <p className="text-gray-700  text-sm mt-2">Name</p>
            <p className="text-gray-600 text-sm">Profix garage</p>
          </div>
          <table className="min-w-[350px] divide-y divide-gray-300 text-sm">
            <tbody>
              <tr>
                <td className="py-1 px-3 text-gray-800 font-bold">Subtotal:</td>
                <td className="py-1 px-3 text-right text-gray-800 font-bold">
                  PKR {invoice["subtotal"].toLocaleString()}
                </td>
              </tr>

              {invoice["discountType"] === "PERCENTAGE" ? (
                <tr>
                  <td className="py-1 px-3 text-gray-600">
                    Discount ({invoice["discount"]}%):
                  </td>
                  <td className="py-1 px-3 text-right text-gray-600">
                    PKR{" "}
                    {(
                      (invoice["discount"] * invoice["subtotal"]) /
                      100
                    ).toLocaleString()}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="py-1 px-3 text-gray-600">Discount:</td>
                  <td className="py-1 px-3 text-right text-gray-600">
                    PKR {invoice["discount"]}
                  </td>
                </tr>
              )}
              <tr>
                <td className="py-1 px-3 text-gray-600">
                  Tax ({invoice["tax"]}%):
                </td>
                <td className="py-1 px-3 text-right text-gray-600">
                  PKR{" "}
                  {(
                    (invoice["tax"] * invoice["subtotal"]) /
                    100
                  ).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="py-1 px-3 font-bold text-gray-800">Total:</td>
                <td className="py-1 px-3 text-right font-bold text-gray-800">
                  PKR {invoice["total"].toLocaleString()}
                </td>
              </tr>
              <tr>
                <td className="py-1 px-3 text-gray-600">Amount paid:</td>
                <td className="py-1 px-3 text-right text-gray-600">
                  PKR {invoice["paid"].toLocaleString()}
                </td>
              </tr>
              <tr className="h-2"></tr>
              <tr className="text-base bg-gray-100">
                <td className="py-2 px-3 font-bold text-gray-800 ">
                  Balance Due:
                </td>
                <td className="py-2 px-3 text-right font-bold text-gray-800">
                  PKR {invoice["balance"].toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="px-3">
          <p className="text-gray-800 font-bold mt-10 mb-4">
            Terms and Conditions
          </p>
          <p className="text-justify text-sm">
            Payment is due upon receipt. We accept cash and IBFT. Parts and
            labor are guaranteed for 12 months or 12,000 miles, under normal
            conditions. This warranty excludes misuse or unauthorized repairs.
            Please keep this invoice for warranty claims. Report any disputes
            within 30 days. Thank you for choosing Profix Garage.
          </p>
        </div>
      </div>
    </main>
  );
}
