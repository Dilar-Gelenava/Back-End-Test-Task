function SingleRepo({ repo }) {
  return (
    <div className="m-4 bg-light rounded p-2">
      <a href={repo.owner.html_url}>
        <img
          src={repo.owner.avatar_url}
          alt="avatar"
          style={{ height: '50px', borderRadius: '50%' }}
        />
        <span className="m-2">{repo.owner.login}</span>
      </a>

      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={`/repo?full_name=${repo.full_name}`}>View</a>
    </div>
  );
}

export default SingleRepo;
