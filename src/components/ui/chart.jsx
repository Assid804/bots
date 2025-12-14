"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/component/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/component/ui/select"

/* -------------------------------------------------------
   🧩 ChartContainer — wrapper for any chart layout
------------------------------------------------------- */
export function ChartContainer({ config, children }) {
  return (
    <div
      className="h-[320px] w-full rounded-2xl border bg-card p-4 shadow-sm"
      style={{
        ["--color-desktop"]: config?.desktop?.color ?? "#6366f1",
        ["--color-mobile"]: config?.mobile?.color ?? "#22c55e",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
}

/* -------------------------------------------------------
   🧩 ChartTooltip & ChartTooltipContent — custom tooltip
------------------------------------------------------- */
export function ChartTooltip(props) {
  return <RechartsTooltip {...props} />
}

export function ChartTooltipContent({ payload, label }) {
  if (!payload || !payload.length) return null
  return (
    <div className="rounded-md bg-background p-2 shadow-md border">
      <div className="font-medium mb-1">{label}</div>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span>
            {entry.name}: <strong>{entry.value}</strong>
          </span>
        </div>
      ))}
    </div>
  )
}

/* -------------------------------------------------------
   🧩 ChartLegend — optional legend support (for other charts)
------------------------------------------------------- */
export function ChartLegend(props) {
  // simple passthrough in case Recharts Legend is used elsewhere
  return <div className="flex justify-center text-sm text-muted-foreground" {...props} />
}

/* -------------------------------------------------------
   📊 Main Chart Component — Shadcn-style dynamic chart
   Supports Line / Bar / Area / Pie with selector
------------------------------------------------------- */
const sampleData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
  { name: "May", value: 600 },
  { name: "Jun", value: 450 },
]

/* -------------------------------------------------------
   🧩 ChartLegendContent — reusable legend renderer
------------------------------------------------------- */
export function ChartLegendContent({ items }) {
  if (!items || !items.length) return null

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-sm">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-muted-foreground">{item.name}</span>
        </div>
      ))}
    </div>
  )
}


const COLORS = ["#6366f1", "#22c55e", "#facc15", "#ef4444", "#06b6d4", "#a855f7"]

export function Chart() {
  const [chartType, setChartType] = useState("line")

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        )

      case "area":
        return (
          <AreaChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              fill="#c7d2fe"
              strokeWidth={3}
            />
          </AreaChart>
        )

      case "pie":
        return (
          <PieChart>
            <RechartsTooltip />
            <Pie
              data={sampleData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {sampleData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        )

      default:
        return (
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        )
    }
  }

  return (
    <Card className="p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Analytics Chart</CardTitle>
        <Select onValueChange={(v) => setChartType(v)} defaultValue={chartType}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Select chart" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="line">Line</SelectItem>
            <SelectItem value="bar">Bar</SelectItem>
            <SelectItem value="area">Area</SelectItem>
            <SelectItem value="pie">Pie</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent>
        <ChartContainer>
          {renderChart()}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
