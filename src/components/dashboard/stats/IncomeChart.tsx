import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Card from "../../common/Card";

const data = [
  { month: "Jan", income: 4000, momGrowth: 20 },
  { month: "Feb", income: 5000, momGrowth: 30 },
  { month: "Mar", income: 7000, momGrowth: 10 },
  { month: "Apr", income: 3000, momGrowth: -20 },
  { month: "May", income: 6000, momGrowth: 60 },
  { month: "Jun", income: 2000, momGrowth: -80 },
];

export default function IncomeTrendChart() {
  return (
    <Card title={"Income Trend"}>
      <p className="text-sm/tight mb-4 sm:text-base/tight">
        Your monthly income and growth for the last 6 months.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <XAxis dataKey="month" />

          <YAxis yAxisId="left" tickFormatter={(v) => `$${v / 1000}k`} />

          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(v) => `${v}%`}
          />

          <Tooltip />
          <Legend />

          <Bar
            yAxisId="left"
            dataKey="income"
            barSize={40}
            fill="#a855f7"
            name="income"
            radius={[5, 5, 0, 0]}
          />

          <Line
            yAxisId="right"
            type="monotone"
            dataKey="momGrowth"
            stroke="#7f1d1d"
            name="momGrowth"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
