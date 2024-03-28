import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { getRead } from "../utils/localStorage";
import useLoadData from "../Hooks/useLoadData";
import { useEffect, useState } from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Spinner from "../components/Spinner/Spinner";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const { data, loaderSpinner } = useLoadData();
  const [readList, setReadList] = useState([]);
  useEffect(() => {
    const localReadItems = getRead();

    if (data.length > 0) {
      const readItems = [];
      for (const id of localReadItems) {
        const book = data.find((boo) => boo.bookId === id);
        const createChartData = {
          name: book.bookName,
          pages: book.totalPages,
        };
        if (book) {
          readItems.push(createChartData);
        }
      }
      setReadList([...readItems]);
    }
  }, [data]);

  if (loaderSpinner) {
    return <Spinner></Spinner>
  }else if(readList.length < 1) {
    return <ErrorPage mgs="You haven't read any books!" />;
  }
  return (
    <div className="flex justify-center items-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          width={700}
          height={400}
          data={readList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Bar
            dataKey="pages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default PagesToRead;
