import React from "react";
import { Query } from "react-apollo";

// import styles
import "./Comments.css";
// import components
import CommentList from "./CommentList";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
// import queries / mutations / etc
import { GET_COMMENTS_OF_ISSUE } from "../gql-types";

const Comments = ({ repositoryName, repositoryOwner, issue }) => {
	return (
		<div className="Comments">
			<Query
				query={GET_COMMENTS_OF_ISSUE}
				variables={{
					repositoryName,
					repositoryOwner,
					number: issue.number,
				}}
				notifyOnNetworkChange={true}
			>
				{({ data, loading, error, fetchMore }) => {
					if (error) return <Error error={error} />;

					const { repository } = data;
					// return loading indicator
					if (loading && !repository)
						return (
							<div className="CommentList">
								<header className="CommentList-header">
									<Loading />
								</header>
							</div>
						);

					return (
						<>
							<CommentList
								loading={loading}
								fetchMore={fetchMore}
								number={issue.number}
								repository={repository}
								repositoryName={repositoryName}
								repositoryOwner={repositoryOwner}
							/>
							{/* <AddComment issueId={repository.issue.id} /> */}
						</>
					);
				}}
			</Query>
		</div>
	);
};

export default Comments;
