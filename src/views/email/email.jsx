import React from 'react';
import * as List from './email-list';
import * as Details from './email-details';
import * as Sidebar from './email-sidebar';
import * as Compose from './email-compose';
import * as mail from './email-data';

class Email extends React.Component {
	constructor(args) {
		super(args);

		// Assign unique IDs to the emails
		const emails = mail.emails;
		let id = 0;
		for (const email of emails) {
			email.id = id++;
		}

		this.state = {
			selectedEmailId: 0,
			currentSection: 'inbox',
			emails,
			allCheck: false,
			showList: true,
			showDetails: false,
			showCompose: false,
			filterVia: "tag",
			showLeftPart: false
		};
	}

	openEmail(id) {
		const emails = this.state.emails;
		const index = emails.findIndex(x => x.id === id);
		emails[index].read = 'true';
		this.setState({
			selectedEmailId: id,
			emails,
			showDetails: true,
			showList: false,
			showCompose: false
		});
	}

	deleteMessage(id) {
		// Mark the message as 'deleted'
		const emails = this.state.emails;
		const index = emails.findIndex(x => x.id === id);
		emails[index].tag = 'deleted';

		// Select the next message in the list
		/* let selectedEmailId = '';
		for (const email of emails) {
			if (email.tag === this.state.currentSection) {
				selectedEmailId = email.id;
				break;
			}
		} */

		this.setState({
			emails,
			showDetails: false,
			showCompose: false,
			showList: true
		});
	}

	setSidebarSection(section, filter) {
		let selectedEmailId = this.state.selectedEmailId;
		if (section !== this.state.currentSection) {
			selectedEmailId = '';
		}
		if (filter === "label") {
			this.setState({
				filterVia: "label"
			});
		}
		else {
			this.setState({
				filterVia: "tag"
			});
		}

		if (this.state.showDetails === true || this.state.showCompose === true) {
			this.setState({
				currentSection: section,
				selectedEmailId,
				showDetails: false,
				showCompose: false,
				showList: true
			});
		}
		else {
			this.setState({
				currentSection: section,
				selectedEmailId
			});
		}
	}

	showList() {
		this.setState({
			showDetails: false,
			showCompose: false,
			showList: true
		});
	}

	showComposeMail() {
		this.setState({
			showCompose: true,
			showList: false,
			showDetails: false
		});
	}

	showLeftPart() {
		this.setState({
			showLeftPart: !this.state.showLeftPart
		});
	}

	render() {
		const currentEmail = this.state.emails.find(x => x.id === this.state.selectedEmailId);
		return (
			<div>
				<h5 className="mb-4">Email App</h5>
				<div className="email-app">
					<Sidebar.EmailSidebar
						emails={mail.emails}
						setSidebarSection={(section, filter) => { this.setSidebarSection(section, filter); }}
						showComposeMail={() => { this.showComposeMail(); }}
						showLeftPart={() => { this.showLeftPart(); }}
						show={this.state.showLeftPart}
					/>
					<List.EmailList
						emails={
							(this.state.filterVia === "tag" ?
								this.state.emails.filter(x => x.tag === this.state.currentSection) :
								this.state.emails.filter(x => x.label === this.state.currentSection))
						}
						onEmailSelected={(id) => { this.openEmail(id); }}
						selectedEmailId={this.state.selectedEmailId}
						currentSection={this.state.currentSection}
						show={this.state.showList}
					/>
					<Details.EmailDetails
						email={currentEmail}
						onDelete={(id) => { this.deleteMessage(id); }}
						show={this.state.showDetails}
						showList={() => { this.showList(); }}
					/>
					<Compose.EmailCompose
						show={this.state.showCompose}
						showList={() => { this.showList(); }}
					/>
				</div>
			</div>
		);
	}
}

export default Email;
