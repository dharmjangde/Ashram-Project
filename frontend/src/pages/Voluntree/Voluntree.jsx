import React from "react";

// Sample team data (could be passed as props or fetched from an API)
const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Backend Developer",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Carol Lee",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/100",
  },
];

// Main component
const Voluntree = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Our Team</h2>
      <div style={styles.grid}>
        {teamMembers.map((member) => (
          <div key={member.id} style={styles.card}>
            <img src={member.image} alt={member.name} style={styles.image} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <button style={styles.button}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "200px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Voluntree;