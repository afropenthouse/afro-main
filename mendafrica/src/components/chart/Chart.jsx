// "use client";
// import { useEffect, useState } from 'react';
// import { PieChart, Pie, Cell } from "recharts";

// export default function ChartComponent({goals, impact}) {
//   console.log("chart impact", impact);
//   console.log("chart goals", goals);
//   const [isClient, setIsClient] = useState(false);
//   const [chartWidth, setChartWidth] = useState(250);

//   const data = [
//     { 
//       name: "Group A", 
//       value: Array.isArray(goals) && goals.length > 0 ? goals[0].targetLives || 1000 : 1000 
//     },
//     { 
//       name: "Group B", 
//       value: Array.isArray(goals) && goals.length > 0 ? impact || 0 : 0 
//     },
//   ];
//   const COLORS = ["black", "#EBCC48",];

//   useEffect(() => {
//     setIsClient(true);

//     const updateChartWidth = () => {
//       const width = window.innerWidth < 500 ? 150 : 250; // Smaller width for small screens
//       setChartWidth(width);
//     };
    
//     updateChartWidth(); // Initial width setting
//     window.addEventListener('resize', updateChartWidth);

//     return () => window.removeEventListener('resize', updateChartWidth);
//   }, []);

//   if (!isClient) {
//     return null; // Avoid rendering on the server
//   }

//   return (
//     <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
//       <PieChart width={chartWidth} height={chartWidth * 0.84}>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={chartWidth * 0.2}
//           outerRadius={chartWidth * 0.35}
//           fill="#8884d8"
//           paddingAngle={2}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function ChartComponent({goals}) {
  const [isClient, setIsClient] = useState(false);
  const [chartWidth, setChartWidth] = useState(200);
  console.log("chart goals", goals);

  // // Fake data for testing
  // const goals = [{ targetLives: 2000 }, { targetLives: 1500 }];
  // const impact = 1200;

  const data = [
    {
      name: "Group A",
      value: Array.isArray(goals) && goals.length > 0 ? goals[0].targetLives : 1000,
    },
    {
      name: "Group B",
      value: Array.isArray(goals) && goals.length > 0 ? parseFloat(goals[0].achievedLives) : 0,
    },
  ];
  const COLORS = ["black", "#EBCC48"];

  useEffect(() => {
    setIsClient(true);

    const updateChartWidth = () => {
      const width = window.innerWidth < 500 ? 150 : 250; // Smaller width for small screens
      setChartWidth(width);
    };

    updateChartWidth(); // Initial width setting
    window.addEventListener("resize", updateChartWidth);

    return () => window.removeEventListener("resize", updateChartWidth);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <PieChart width={chartWidth} height={chartWidth * 0.84}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={chartWidth * 0.2}
          outerRadius={chartWidth * 0.35}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
