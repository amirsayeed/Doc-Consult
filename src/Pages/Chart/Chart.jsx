import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid} from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const Chart = ({booked}) => {

    const data = [...booked];

    return (
        <div className='flex items-center justify-center text-[#14141499] font-medium'>
            <BarChart width={1000} height={400} data={data} margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            
            <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} 
            label={{ position: 'top' }}>
                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
            </Bar>
            </BarChart>
        </div>
    );
};

export default Chart;