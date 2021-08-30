import { useState } from 'react';
import { useEffect } from 'react';

function RepoDetailed() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const [repo, setRepo] = useState(null);

  useEffect(() => {
    if (urlParams.get('full_name')) {
      fetch(`https://api.github.com/repos/${urlParams.get('full_name')}`, {
        method: 'GET',
      })
        .then(function (response) {
          if (response.status !== 200) {
            throw response.status;
          }
          return response.json();
        })
        .then(function (responseData) {
          setRepo(responseData);
        })
        .catch(function (error) {
          if (error === 404) {
            console.log('Page Not found', error);
          } else {
            console.log('Server Error');
          }
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {repo && (
        <div className="d-flex justify-content-center">
          <div
            className="bg-light p-4 m-4 rounded"
            style={{ maxWidth: '400px' }}>
            <a href={repo.owner.html_url}>
              <img
                src={repo.owner.avatar_url}
                alt="avatar"
                style={{ height: '75px', borderRadius: '50%' }}
              />
              <span className="m-2">{repo.owner.login}</span>
            </a>
            <a href={repo.html_url}>
              <h1 className="text-dark">{repo.name}</h1>
            </a>
            <p>Language: {repo.language}</p>
            <p>{repo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RepoDetailed;
