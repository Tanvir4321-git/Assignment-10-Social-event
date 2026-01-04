import { Cell, Pie, PieChart } from "recharts";

const COLORS = ["#2563eb", "#16a34a", "#7c3aed"];

export default function EventPieChart({ cardData }) {
  const pieData = cardData.map(item => ({
    name: item.title,
    value: item.count,
  }));

  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  return (
    <PieChart width={350} height={350}>
      <Pie
        data={pieData}
        dataKey="value"
        innerRadius={80}
        outerRadius={130}
        label={false}
      >
        {pieData.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index]} />
        ))}
      </Pie>

      <text
        x="50%"
        y="45%"
        textAnchor="middle"
        style={{ fontSize: "14px", fill: "#555" }}
      >
        Total
      </text>

      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        style={{ fontSize: "30px", fontWeight: "700", fill: "#111" }}
      >
        {total}
      </text>

      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        style={{ fontSize: "12px", fill: "#777" }}
      >
        Events Summary
      </text>
    </PieChart>
  );
}
