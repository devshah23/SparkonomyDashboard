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
import { chartData } from "../../../constants/mockData";

export default function IncomeTrendChart() {
  return (
    <Card title={"Income Trend"}>
      <p className="text-sm/tight mb-4 sm:text-base/tight">
        Your monthly income and growth for the last 6 months.
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={chartData}>
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
