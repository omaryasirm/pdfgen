export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const searchInvoice = (await searchParams)["invoice"];

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

  return (
    <main>
      <div style={{ maxWidth: "768px", fontFamily: "Arial, sans-serif" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 0.75rem",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://s3.ap-southeast-1.amazonaws.com/vemessage-images/incidents/1727980857086-profix_wb_logo.png"
              style={{ height: "5rem" }}
              alt="Logo"
            />
          </div>
          <div
            style={{
              marginLeft: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <p
              style={{
                fontSize: "1.875rem",
                marginBottom: "1.75rem",
                fontWeight: "bold",
              }}
            >
              Workshop Invoice
            </p>
            <div style={{ display: "flex", fontSize: "0.875rem" }}>
              <div style={{ marginRight: "2.5rem" }}>
                <p style={{ color: "#9CA3AF" }}>Invoice no:</p>
                <p style={{ color: "#9CA3AF" }}>Invoice date:</p>
                <p style={{ color: "#9CA3AF" }}>Due:</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>{invoice["invoiceNo"]}</p>
                <p>{new Date(invoice["createdAt"]).toDateString()}</p>
                <p>{new Date(invoice["createdAt"]).toDateString()}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
            marginBottom: "1rem",
            padding: "0 0.75rem",
          }}
        >
          <div style={{ color: "#374151", fontSize: "0.875rem" }}>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: "#1F2937",
              }}
            >
              From
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#1F2937",
                marginBottom: "0.5rem",
              }}
            >
              Profix Garage
            </p>
            <p>John Smith</p>
            <p>wiz@saldoapps.com</p>
            <p>80296979597</p>
            <p>First str, 28-32, Chicago, USA</p>
          </div>
          <div
            style={{
              textAlign: "right",
              fontSize: "0.875rem",
              color: "#374151",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                color: "#1F2937",
              }}
            >
              Bill to
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                color: "#1F2937",
                marginBottom: "0.5rem",
              }}
            >
              {invoice["name"]}
            </p>
            <p>{invoice["phone"]}</p>
            <p>{invoice["registrationNo"]}</p>
            <p>{invoice["vehicleModel"]}</p>
            <p>{invoice["vehicleColor"]}</p>
          </div>
        </div>

        <table
          style={{
            minWidth: "100%",
            borderTopWidth: "1px",
            borderBottomWidth: "1px",
            borderColor: "#D1D5DB",
            marginTop: "2.5rem",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#D1D5DB" }}>
              <th
                style={{
                  paddingLeft: "1rem",
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                #
              </th>
              <th
                style={{
                  textTransform: "uppercase",
                  padding: "0.875rem 0",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                  width: "60%",
                }}
              >
                Description
              </th>
              <th
                style={{
                  textTransform: "uppercase",
                  padding: "0.875rem 0",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Rate
              </th>
              <th
                style={{
                  textTransform: "uppercase",
                  padding: "0.875rem 0",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Qty
              </th>
              <th
                style={{
                  paddingRight: "1rem",
                  textTransform: "uppercase",
                  textAlign: "right",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#111827",
                }}
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              borderTopWidth: "1px",
              borderBottomWidth: "1px",
              borderColor: "#E5E7EB",
            }}
          >
            {invoice["serviceRecords"].map((service: any, index: number) => (
              <tr
                key={index}
                style={{ borderTopWidth: "1px", borderColor: "#E5E7EB" }}
              >
                <td
                  style={{
                    paddingLeft: "1rem",
                    // padding: "1rem 2.5rem 1rem 1rem",
                    fontSize: "0.875rem",
                    color: "#6B7280",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    padding: "1rem 2.5rem 1rem 0",
                    fontSize: "0.875rem",
                    color: "#6B7280",
                  }}
                >
                  {service["name"]}
                </td>
                <td
                  style={{
                    padding: "1rem 0",
                    fontSize: "0.875rem",
                    color: "#6B7280",
                  }}
                >
                  {service["rate"].toLocaleString()}
                </td>
                <td
                  style={{
                    padding: "1rem 0",
                    fontSize: "0.875rem",
                    textAlign: "center",
                    color: "#6B7280",
                  }}
                >
                  {service["qty"]}
                </td>
                <td
                  style={{
                    paddingRight: "1rem",
                    fontSize: "0.875rem",
                    textAlign: "right",
                    color: "#6B7280",
                  }}
                >
                  {service["total"].toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.25rem",
          }}
        >
          <div style={{ padding: "0 0.75rem" }}>
            <p
              style={{
                color: "#1F2937",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Payment instruction
            </p>
            <p style={{ color: "#374151", fontSize: "0.875rem" }}>Bank</p>
            <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>
              Meezan bank
            </p>
            <p
              style={{
                color: "#374151",
                fontSize: "0.875rem",
                marginTop: "0.5rem",
              }}
            >
              Account
            </p>
            <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>
              13412353125325
            </p>
            <p
              style={{
                color: "#374151",
                fontSize: "0.875rem",
                marginTop: "0.5rem",
              }}
            >
              Name
            </p>
            <p style={{ color: "#4B5563", fontSize: "0.875rem" }}>
              Profix garage
            </p>
          </div>
          <table
            style={{
              minWidth: "350px",
              borderTopWidth: "1px",
              borderBottomWidth: "1px",
              borderColor: "#D1D5DB",
              fontSize: "0.875rem",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    color: "#1F2937",
                    fontWeight: "bold",
                  }}
                >
                  Subtotal:
                </td>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    textAlign: "right",
                    color: "#1F2937",
                    fontWeight: "bold",
                  }}
                >
                  PKR {invoice["subtotal"].toLocaleString()}
                </td>
              </tr>

              {invoice["discountType"] === "PERCENTAGE" ? (
                <tr>
                  <td style={{ padding: "0.25rem 0.75rem", color: "#4B5563" }}>
                    Discount ({invoice["discount"]}%):
                  </td>
                  <td
                    style={{
                      padding: "0.25rem 0.75rem",
                      textAlign: "right",
                      color: "#4B5563",
                    }}
                  >
                    PKR{" "}
                    {(
                      (invoice["discount"] * invoice["subtotal"]) /
                      100
                    ).toLocaleString()}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td style={{ padding: "0.25rem 0.75rem", color: "#4B5563" }}>
                    Discount:
                  </td>
                  <td
                    style={{
                      padding: "0.25rem 0.75rem",
                      textAlign: "right",
                      color: "#4B5563",
                    }}
                  >
                    PKR {invoice["discount"]}
                  </td>
                </tr>
              )}
              <tr>
                <td style={{ padding: "0.25rem 0.75rem", color: "#4B5563" }}>
                  Tax ({invoice["tax"]}%):
                </td>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    textAlign: "right",
                    color: "#4B5563",
                  }}
                >
                  PKR{" "}
                  {(
                    (invoice["tax"] * invoice["subtotal"]) /
                    100
                  ).toLocaleString()}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    fontWeight: "bold",
                    color: "#1F2937",
                  }}
                >
                  Total:
                </td>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    textAlign: "right",
                    fontWeight: "bold",
                    color: "#1F2937",
                  }}
                >
                  PKR {invoice["total"].toLocaleString()}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0.25rem 0.75rem", color: "#4B5563" }}>
                  Amount paid:
                </td>
                <td
                  style={{
                    padding: "0.25rem 0.75rem",
                    textAlign: "right",
                    color: "#4B5563",
                  }}
                >
                  PKR {invoice["paid"].toLocaleString()}
                </td>
              </tr>
              <tr style={{ height: "0.5rem" }}></tr>
              <tr style={{ fontSize: "1rem", backgroundColor: "#F3F4F6" }}>
                <td
                  style={{
                    padding: "0.5rem 0.75rem",
                    fontWeight: "bold",
                    color: "#1F2937",
                  }}
                >
                  Balance Due:
                </td>
                <td
                  style={{
                    padding: "0.5rem 0.75rem",
                    textAlign: "right",
                    fontWeight: "bold",
                    color: "#1F2937",
                  }}
                >
                  PKR {invoice["balance"].toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ padding: "0 0.75rem" }}>
          <p
            style={{
              color: "#1F2937",
              fontWeight: "bold",
              marginTop: "2.5rem",
              marginBottom: "1rem",
            }}
          >
            Terms and Conditions
          </p>
          <p style={{ textAlign: "justify", fontSize: "0.875rem" }}>
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
