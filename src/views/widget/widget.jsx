import React from 'react';
import { Card, CardBody, CardTitle, CardColumns } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
	ActiveVisitors,
	Projects,
	RecentComment,
	Chat,
	Earnings,
	Orders,
	CryptoOrder,
	CryptoExchange,
	CampaignOverview,
	TaskList,
	UserProfile,
	UserProfile2,
	BrowserStats,
	Feeds,
	Weather
} from 'components/dashboard-components';

import img1 from 'assets/images/users/1.jpg';
import img4 from 'assets/images/users/4.jpg';
import img5 from 'assets/images/users/5.jpg';

class Widgets extends React.Component {
	render() {
		return (
			<CardColumns>
				<Card>
					<CardBody>
						<CardTitle>Recent Comments</CardTitle>
					</CardBody>
					<div className="comment-widgets scrollable" style={{ height: '560px' }}>
						<PerfectScrollbar>
							<RecentComment
								image={img1}
								badge="Pending"
								badgeColor="primary"
								name="James Anderson"
								comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
								date="April 14"
							/>
							<RecentComment
								image={img4}
								badge="Approved"
								badgeColor="success"
								name="Michael Jorden"
								comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
								date="April 14"
							/>
							<RecentComment
								image={img5}
								badge="Rejected"
								badgeColor="danger"
								name="Johnathan Doeting"
								comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
								date="April 14"
							/>
							<RecentComment
								image={img1}
								badge="Pending"
								badgeColor="primary"
								name="James Anderson"
								comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
								date="April 14"
							/>
							<RecentComment
								image={img4}
								badge="Approved"
								badgeColor="success"
								name="Michael Jorden"
								comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
								date="April 14"
							/>
						</PerfectScrollbar>
					</div>
				</Card>
				<TaskList />
				<CryptoExchange />
				<Projects />
				<CryptoOrder />
				<Chat />
				<UserProfile />
				<UserProfile2 />
				<ActiveVisitors />
				<CampaignOverview />
				<BrowserStats />
				<Earnings />
				<Orders />
				<Feeds />
				<Weather />
			</CardColumns>
		);
	}
}

export default Widgets;
