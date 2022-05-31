import { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const RepoList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepos } = useActions();
	const { data, error, loading } = useTypedSelector((state) => state.repos);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchRepos(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && (
				<ul>
					{data.map((name) => {
						return <li> {name} </li>;
					})}
				</ul>
			)}
		</div>
	);
};

export default RepoList;
