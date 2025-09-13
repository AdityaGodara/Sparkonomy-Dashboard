// src/data/invoice_data.ts
export interface Invoice {
  title: string;
  amount: string;
  due: string;
  status: string;
  map: "update" | "unpaid" | "paid" | "partial" | "overdue" | "disputed" | "awaited" | "draft";
}

export const invoice_data: Invoice[] = [
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Update Status",
    map: "update",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Unpaid",
    map: "unpaid",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Disputed",
    map: "disputed",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Paid",
    map: "paid",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Paid",
    map: "paid",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Partially Paid",
    map: "partial",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Paid",
    map: "paid",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Overdue",
    map: "overdue",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Awaited",
    map: "awaited",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Draft",
    map: "draft",
  },
  {
    title: "Client Name",
    amount: "1,25,000",
    due: "2024-05-15",
    status: "Paid",
    map: "paid",
  },
];
