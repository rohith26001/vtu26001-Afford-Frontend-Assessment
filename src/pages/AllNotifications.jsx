import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import NotificationCard from "../components/NotificationCard";

function AllNotifications() {
  const notifications = [
    {
      id: 1,
      title: "TCS Placement Drive",
      category: "Placement",
      priority: "High",
    },
    {
      id: 2,
      title: "Semester Results Released",
      category: "Result",
      priority: "Medium",
    },
    {
      id: 3,
      title: "Tech Fest Registration",
      category: "Event",
      priority: "Low",
    },
  ];

  return (
    <div className="container">
      <h1>All Notifications</h1>

      <SearchBar />
      <FilterPanel />

      {notifications.map((item) => (
        <NotificationCard key={item.id} notification={item} />
      ))}
    </div>
  );
}

export default AllNotifications;