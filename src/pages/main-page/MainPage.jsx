import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getRepos } from '../../services/repos/getRepos';
import ReposWrapper from '../../components/repos/repos-wrapper';

function MainPage() {
  const { register, handleSubmit } = useForm();

  const [repos, setRepos] = useState([]);

  const onSubmit = async (formData) => {
    let data = await getRepos(formData);
    setRepos(data.items);
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="m-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-light p-4 rounded">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Order By</label>
              <select
                {...register('order', { required: true })}
                className="form-select">
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Sort By</label>
              <select
                {...register('sort', { required: true })}
                className="form-select">
                <option value="stars">Stars</option>
                <option value="forks">Forks</option>
                <option value="updated">Updated</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        {repos && <ReposWrapper repos={repos} />}
      </div>
    </div>
  );
}

export default MainPage;
