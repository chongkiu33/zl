import Link from "next/link"
import styles from "./Rightbar.module.css"

function calculateDatePercentage(targetDate) {
    const startDate = new Date("2021-09-15");
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

const Rightbar = () => {
    const data = [
        { date: "2021-09-17", days: 1 ,link: "/playground/sound-visualization", title: "Sound Visualization" },
        { date: "2021-11-17", days: 1 ,link: "/playground/solidarity", title: "solidarity"},
        { date: "2021-12-06", days: 1 ,link: "/playground/mayan-language", title: "mayan-language"},
        { date: "2022-03-24", days: 1 ,link: "/playground/stupa", title: "Stupa"},
        { date: "2022-07-13", days: 1 ,link: "/playground/a-serious-window-frames-for-pavilion", title: "A Serious Window Frames For Pavilion"},
        { date: "2022-09-11", days: 1 ,link: "/playground/", title: "back"},
        { date: "2022-12-15", days: 1 ,link: "/playground/qilin", title: "Qilin"},
        { date: "2022-12-16", days: 1 ,link: "/playground/mirror", title: "Mirror"},
        { date: "2023-08-31", days: 1 ,link: "/playground/artificial-friend", title: "Artificial Friend"},
        { date: "2022-03-24", days: 1 ,link: "/playground/", title: ""},
        { date: "2022-03-24", days: 1 ,link: "/playground/", title: ""},
        { date: "2022-03-24", days: 1 ,link: "/playground/", title: ""},
        
    ];

    

    return (
        <div className={styles.container}>
          <div className={styles.svgContainer}>
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
              {/* 静态的参考线 */}
              <path d="M 50 0 L 100 0" stroke="black" strokeWidth="0.5" />
              <path d="M 50 100 L 100 100" stroke="black" strokeWidth="0.5" />
    
              {/* 遍历数据数组，为每个数据生成一个 <path> 元素 */}
              {data.map((item, index) => {
                const cDP = calculateDatePercentage(item.date);
                return (
                  <path
                    key={index}

                    className={styles.path}
                    d={`M 50 ${cDP} L 100 ${cDP}`}  // 动态应用计算出的位置
                    stroke="black"
                    strokeWidth={item.days*0.5} // 使用天数作为 strokeWidth
                  />
                );
              })}
            </svg>
          </div>
        </div>
      );
};

export default Rightbar