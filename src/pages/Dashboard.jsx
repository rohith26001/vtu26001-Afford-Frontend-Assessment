function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div className="card">
          <h3>Total Notifications</h3>
          <p>100</p>
        </div>

        <div className="card">
          <h3>Placements</h3>
          <p>40</p>
        </div>

        <div className="card">
          <h3>Results</h3>
          <p>30</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>30</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;