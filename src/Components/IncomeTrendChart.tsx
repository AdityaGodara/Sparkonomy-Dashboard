import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 3500, momGrowth: 20 },
  { name: "Feb", income: 4800, momGrowth: 40 },
  { name: "Mar", income: 6800, momGrowth: 50 },
  { name: "Apr", income: 3000, momGrowth: -30 },
  { name: "May", income: 5000, momGrowth: 60 },
  { name: "Jun", income: 0, momGrowth: -90 },
];

export default function IncomeTrendChart() {
  return (
    <div className="w-full h-96">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            yAxisId="left"
            orientation="left"
            stroke="#9747FF"
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#8B0000"
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="income"
            fill="#9747FF"
            name="income"
            barSize={40}
            radius={[4, 4, 0, 0]}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#8B0000"
            name="momGrowth"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
