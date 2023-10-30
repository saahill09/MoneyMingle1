document.addEventListener('DOMContentLoaded', () => {
    const groupForm = document.getElementById('groupForm');

    groupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const groupName = document.getElementById('groupName').value;
        const groupPurpose = document.getElementById('groupPurpose').value;
        const inviteMembers = document.getElementById('inviteMembers').value.split(',');

        // Validate and process form data (you can handle this logic as per your requirements)
        // For example, you can send invitation emails to the provided email addresses.
        inviteMembers.forEach(email => {
            // Here, you can implement the logic to send invitation emails to each member.
            // You can use a backend server to handle email sending or an email service like SendGrid.
            // Once the invitations are sent, you can redirect the user or perform any other action.
            console.log(`Invitation sent to ${email}`);
        });

        // After processing, you can redirect the user or perform any other action
        console.log('Group created successfully!');
    });
});
