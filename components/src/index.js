import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';


const App = () => {
	return (
		<div className="ui container comments">

		
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 4:45PM" 
					content="Nice blog post!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
					<CommentDetail 
					author="Jane" 
					timeAgo="Today at 6:35PM" 
					content="It's an amazing blog..."
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Yesterday at 2:05PM" 
					content="I like the subject, its very cool !!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};
// Renders the App component into a div with id 'root'
 
 ReactDOM.render(<App />, document.querySelector('#root'));