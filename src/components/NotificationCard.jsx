function NotificationCard({ notification }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px 0",
      }}
    >
      <h3>{notification.title}</h3>

      <p>Category : {notification.category}</p>

      <p>Priority : {notification.priority}</p>
    </div>
  );
}

export default NotificationCard;