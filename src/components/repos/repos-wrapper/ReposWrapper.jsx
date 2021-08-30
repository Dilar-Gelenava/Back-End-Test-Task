import SingleRepo from '../single-repo';

function ReposWrapper({ repos }) {
  return (
    <div>
      {repos &&
        repos.map((repo, index) => <SingleRepo key={index} repo={repo} />)}
    </div>
  );
}

export default ReposWrapper;
