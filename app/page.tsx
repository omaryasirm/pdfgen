import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex justify-between">
          <div className="flex">
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
                <p className="">001</p>
                <p className="">13 Oct, 2024</p>
                <p className="">14 Oct, 2024</p>
              </div>
            </div>

            {/* <p className="text-sm">Invoice no 001</p>
            <p className="text-xl">Invoice date: Jul 13th, 2021</p>
            <p className="text-xl">Due: Feb 13th, 2021</p> */}
          </div>
        </div>
        {/* <hr className="my-4" /> */}
        <div className="flex justify-between mt-8 mb-4">
          {/* <div>
            <p className="uppercase text-xs text-gray-600 mb-2">Bill to</p>
            <p>Shepard corp.</p>
            <p>shepard@mail.com</p>
            <p>80296979597</p>
            <p>North str, 32, Chicago, USA</p>
          </div> */}
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
            <p className="text-lg font-bold text-gray-800 mb-2">Omar Yasir</p>
            <p>03344123456</p>
            <p>LED-1234</p>
            <p>Honda Civic</p>
            <p>White</p>
          </div>
        </div>
        <hr />
        <table className="min-w-full divide-y divide-gray-300 mt-4">
          <thead>
            <tr>
              <th className="py-3.5 text-left text-sm font-semibold text-gray-900 w-[70%]">
                Description
              </th>
              <th className="py-3.5 text-left text-sm font-semibold text-gray-900">
                Rate
              </th>
              <th className="py-3.5  text-sm font-semibold text-gray-900">
                Qty
              </th>
              <th className="py-3.5 text-right text-sm font-semibold text-gray-900">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[1, 1].map((value, index) => (
              <tr key={index}>
                <td className="py-4 pr-10 text-sm text-gray-500">Prototype</td>
                <td className="py-4 text-sm text-gray-500">1,234</td>
                <td className="py-4 text-sm text-center text-gray-500">1</td>
                <td className="py-4 text-sm text-right text-gray-500">2000</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-20">
          <div>
            <p className="text-gray-400 text-sm mb-2">Payment instruction</p>
            <p className="text-gray-400 text-sm">
              Paypal email: wiz@saldoapps.com
            </p>
            <p className="text-gray-400 text-sm">
              Make checks payable to: John Smith
            </p>
            <p className="text-gray-400 text-sm">
              Bank Transfer Routing (ABA): 061120084
            </p>
          </div>
          <table className="min-w-[350px] divide-y divide-gray-300 text-sm">
            <tbody>
              <tr>
                <td className="py-1 px-3 text-gray-600 font-bold">Subtotal:</td>
                <td className="py-1 px-3 text-right text-gray-600 font-bold">
                  PKR 10000
                </td>
              </tr>
              <tr>
                <td className="py-1 px-3 text-gray-600">Discount (20%):</td>
                <td className="py-1 px-3 text-right text-gray-600">PKR 1000</td>
              </tr>
              <tr>
                <td className="py-1 px-3 text-gray-600">Shipping Cost:</td>
                <td className="py-1 px-3 text-right text-gray-600">PKR 1000</td>
              </tr>
              <tr>
                <td className="py-1 px-3 text-gray-600">Sales Tax:</td>
                <td className="py-1 px-3 text-right text-gray-600">PKR 1000</td>
              </tr>
              <tr>
                <td className="py-1 px-3 font-bold text-gray-800">Total:</td>
                <td className="py-1 px-3 text-right font-bold text-gray-800">
                  PKR 1000
                </td>
              </tr>
              <tr>
                <td className="py-1 px-3 text-gray-600">Amount paid:</td>
                <td className="py-1 px-3 text-right text-gray-600">PKR 0.00</td>
              </tr>
              <tr className="h-2"></tr>
              <tr className="text-base bg-blue-50">
                <td className="py-2 px-3 font-bold text-gray-800 ">
                  Balance Due:
                </td>
                <td className="py-2 px-3 text-right font-bold text-gray-800">
                  PKR 1000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
