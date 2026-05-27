import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Analytics({ tasks }) {

  const completedTasks =
    tasks.filter(
      task => task.completed
    ).length;

  const pendingTasks =
    tasks.length - completedTasks;

  const completionRate =
    tasks.length > 0
    ? Math.round(
        (completedTasks / tasks.length) * 100
      )
    : 0;

  const data = [

    {
      name:"Completed",
      value:completedTasks
    },

    {
      name:"Pending",
      value:pendingTasks
    }

  ];

  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (

    <div className="min-h-screen bg-gray-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">

        Productivity Analytics

      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-gray-800 p-6 rounded-xl">

          <h2>Total Tasks</h2>

          <p className="text-3xl mt-3">
            {tasks.length}
          </p>

        </div>


        <div className="bg-gray-800 p-6 rounded-xl">

          <h2>Completed</h2>

          <p className="text-3xl mt-3">
            {completedTasks}
          </p>

        </div>


        <div className="bg-gray-800 p-6 rounded-xl">

          <h2>Pending</h2>

          <p className="text-3xl mt-3">
            {pendingTasks}
          </p>

        </div>


        <div className="bg-gray-800 p-6 rounded-xl">

          <h2>Completion Rate</h2>

          <p className="text-3xl mt-3">
            {completionRate}%
          </p>

        </div>

      </div>


      <div className="bg-gray-800 p-6 rounded-xl h-[400px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              outerRadius={120}
            >

              {data.map(
                (entry,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip/>

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Analytics;