function Profile({ name, role, avatarUrl }) {
  return (
    <article
      className="card"
      tabIndex={0}
      aria-label={`Профіль учасника ${name}`}
    >
      <img
        src={avatarUrl}
        alt={`Аватар ${name}`}
        className="avatar"
        loading="lazy"
      />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
    </article>
  );
}

export default Profile;
