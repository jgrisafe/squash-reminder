(function() {
	var counter = document.getElementById('commits_tab_counter');
	var mergeMessage = document.getElementsByClassName('merge-message');
	var mergeMessage = mergeMessage[0];
	
	var multipleCommits = counter.innerHTML.trim() !== '1';

	if (multipleCommits) {
		var content = `
			<div class='branch-action-item'>
				<div class="branch-action-item-icon completeness-indicator completeness-indicator-error">
					<svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"></path></svg>
				</div>
				<h4 class='status-heading'>Don't forget to squash your commits</h4>
			</div>`

		var div = document.createElement('div');
		div.innerHTML = content.trim();
		var element = div.firstChild;
		mergeMessage.parentNode.insertBefore(element, mergeMessage);
	}
})()
