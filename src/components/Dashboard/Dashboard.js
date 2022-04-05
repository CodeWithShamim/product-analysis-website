import {
  Area,
  AreaChart,
  // CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// import data from "../../data/charts-data.json";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      id: 2,
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      id: 3,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      id: 4,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      id: 5,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      id: 6,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-md-6">
          <h3 className="text-info">Month Wise sell</h3>
          <ResponsiveContainer width="98%" height="90%">
            <LineChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* ------------------------- */}
        <div className="col-md-6">
          <h3 className="text-info">Investment VS Revenue</h3>
          <ResponsiveContainer width="98%" height="90%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <Tooltip />
              <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
              <ReferenceLine
                y={4000}
                label="Max"
                stroke="red"
                strokeDasharray="3 3"
              />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#9983D8"
                fill="#9983D8"
              />

              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
