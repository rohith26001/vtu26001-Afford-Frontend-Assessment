import { calculatePriority } from "../utils/priorityCalculator";

function PriorityNotifications() {
  const notifications = [
    {
      id: 1,
      title: "TCS Placement Drive",
      category: "Placement",
      views: 500,
    },
    {
      id: 2,
      title: "Semester Results",
      category: "Result",
      views: 300,
    },
    {
      id: 3,
      title: "College Event",
      category: "Event",
      views: 100,
    },
  ];

  return (
    <div className="container">
      <h1>Priority Notifications</h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>Category: {item.category}</p>
          <p>Priority: {calculatePriority(item.views)}</p>
        </div>
      ))}
    </div>
  );
}

export default PriorityNotifications;