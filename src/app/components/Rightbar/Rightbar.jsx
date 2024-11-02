import Link from "next/link"
import styles from "./Rightbar.module.css"
import { useState } from "react";

function calculateDatePercentage(targetDate) {
    const startDate = new Date("2021-09-01");
    const endDate = new Date("2024-12-30");
  
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const targetTime = new Date(targetDate).getTime();
  
    // 计算百分比
    const totalSpan = endTime - startTime;
    const targetSpan = targetTime - startTime;
  
    const percentage = (targetSpan / totalSpan) * 100;
    
    return percentage.toFixed(2); // 保留两位小数
}


const month =[
    {date:"2021-09-01"},
    {date:"2021-10-01"},
    {date:"2021-11-01"},
    {date:"2021-12-01"},
    {date:"2022-01-01"},
    {date:"2022-02-01"},
    {date:"2022-03-01"},
    {date:"2022-04-01"},
    {date:"2022-05-01"},
    {date:"2022-06-01"},
    {date:"2022-07-01"},
    {date:"2022-08-01"},
    {date:"2022-09-01"},
    {date:"2022-10-01"},
    {date:"2022-11-01"},
    {date:"2022-12-01"},
    {date:"2023-01-01"},
    {date:"2023-02-01"},
    {date:"2023-03-01"},
    {date:"2023-04-01"},
    {date:"2023-05-01"},
    {date:"2023-06-01"},
    {date:"2023-07-01"},
    {date:"2023-08-01"},
    {date:"2023-09-01"},
    {date:"2023-10-01"},
    {date:"2023-11-01"},
    {date:"2023-12-01"},
    {date:"2024-01-01"},
    {date:"2024-02-01"},
    {date:"2024-03-01"},
    {date:"2024-04-01"},
    {date:"2024-05-01"},
    {date:"2024-06-01"},
    {date:"2024-07-01"},
    {date:"2024-08-01"},
    {date:"2024-09-01"},
    {date:"2024-10-01"},
    {date:"2024-11-01"},
    {date:"2024-12-01"}
];

const Rightbar = () => {
    const [hoveredDate,setHoveredDate] = useState(new Date().toISOString().split("T")[0]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredTitle, setHoveredTitle] = useState("");
    const [titleHeight, setTitleHeight] = useState(0);

    const data = [
        { date: "2021-09-17", link: "/playground/sound-visualization", title: "Sound Visualization" },
        { date: "2021-11-17", link: "/playground/solidarity", title: "solidarity"},
        { date: "2021-12-06", link: "/playground/mayan-language", title: "mayan-language"},
        { date: "2022-03-24", link: "/playground/stupa", title: "Stupa"},
        { date: "2022-07-13", link: "/playground/a-serious-window-frames-for-pavilion", title: "A Serious Window Frames For Pavilion"},
        { date: "2022-09-11", link: "/playground/", title: "back"},
        { date: "2022-12-15", link: "/playground/qilin", title: "Qilin"},
        { date: "2022-12-16", link: "/playground/mirror", title: "Mirror"},
        { date: "2023-08-31", link: "/playground/artificial-friend", title: "Artificial Friend"},
        { date: "2023-10-02", link: "/playground/", title: ""},
        { date: "2023-10-16", link: "/playground/", title: ""},
        { date: "2023-10-26", link: "/playground/", title: ""},
        { date: "2023-12-12", link: "/playground/", title: ""},
        { date: "2024-04-16", link: "/playground/", title: ""},
        { date: "2024-04-23", link: "/playground/", title: ""},
        { date: "2024-04-26", link: "/playground/", title: ""},
        { date: "2024-04-28", link: "/playground/", title: ""},
        { date: "2024-08-31", link: "/playground/", title: ""},
        { date: "2024-10-31", link: "/playground/", title: ""},
        { date: "2024-11-05", link: "/playground/", title: ""}    
    ];

    const handleMouseEnter = (event, title) => {
        setHoveredDate(title.date);
        setHoveredTitle(title.title);
        setTitleHeight(event.clientY); // 设置标题容器的高度为鼠标的Y坐标
    };


    const handleMouseLeave = () => {
        setHoveredDate(new Date().toISOString().split("T")[0]);
        setHoveredTitle(""); // 隐藏标题
        setTitleHeight(0); // 重置标题容器高度
    };


    

    return (
        <div className={styles.container}>
          <div className={styles.svgContainer}>
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
            {month.slice(1).map((item, index) => {
                const start = calculateDatePercentage(month[index].date);
                const end = calculateDatePercentage(item.date);
                const height = end - start;
                return (
                  <rect
                    key={index}
                    x="40"
                    y={start}
                    width="60"
                    height={height}
                    fill={hoveredIndex === index ? "rgba(0, 0, 0, 0.1)" : "transparent"}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                );
              })}
              
              {/* 静态的参考线 */}
              {month.map((item, index) => {
                const cDP = calculateDatePercentage(item.date);
                return (
                  <path
                    key={index}

                    className={styles.path}
                    d={`M 40 ${cDP} L 100 ${cDP}`}  // 动态应用计算出的位置
                    stroke="#D0CCCC"
                    strokeWidth={0.2} // 使用天数作为 strokeWidth
                  />
                );
              })}
    
              {/* 遍历数据数组，为每个数据生成一个 <path> 元素 */}
              {data.map((item, index) => {
                const cDP = calculateDatePercentage(item.date);
                return (
                  <path
                    key={index}

                    className={styles.path}
                    d={`M 40 ${cDP} L 100 ${cDP}`}  // 动态应用计算出的位置
                    stroke="black"
                    strokeWidth={0.4} // 使用天数作为 strokeWidth
                    onMouseEnter={(e) => handleMouseEnter(e, item)} // 传递事件和数据
                    onMouseLeave={handleMouseLeave}
                    onClick={() => window.location.href = item.link}
                    
                  />
                );
              })}
            </svg>
          </div>

          <div className={styles.dateContainer}>
        {hoveredDate ? (
          <div>
            <div>{new Date(hoveredDate).toLocaleDateString("en-US", { month: "short" })}</div>
            <div>{new Date(hoveredDate).toLocaleDateString("en-US", { day: "2-digit" })}</div>
            <div>{new Date(hoveredDate).getFullYear()}</div>
          </div>
        ) : (
          <div>Hover over a date</div>
        )}
      </div>

      <div className={styles.titleContainer} style={{ marginTop: titleHeight}}>{hoveredTitle}</div>

         <div className={styles.svgContainer2}>
            <svg width="100%" height={100} preserveAspectRatio="none" viewBox="0 0 100 100">
            <path
                    

                    
                    d={`M 40 2 L 100 2`} 
                    stroke="black"
                    strokeWidth={2} 
                  />
            </svg>
          </div>
        </div>
      );
};

export default Rightbar