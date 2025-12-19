import Profile from "./Profile";
import "./Lab1.css";

function Lab1() {
  const users = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      avatarUrl: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Charlie Brown",
      role: "UI/UX Designer",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Diana Prince",
      role: "Project Manager",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Ethan Hunt",
      role: "QA Engineer",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Fiona Lee",
      role: "DevOps Engineer",
      avatarUrl: "https://i.pravatar.cc/150?img=6",
    },
  ];

  return (
    <section aria-labelledby="team-title">
      <h1 id="team-title">Команда проєкту</h1>

      <div className="lab1-container">
        {users.map((user) => (
          <Profile
            key={user.name}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Lab1;
