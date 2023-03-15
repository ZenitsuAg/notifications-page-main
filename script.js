const notificationCount = document.querySelector('.notification-count');
notificationCount.value = 0;

const unread = document.querySelectorAll('.notification[state="unread"] ');
const smallDot = document.querySelectorAll('.dot');

// This is for the "Mark all as read button" to mark them as read and set the
// notificationCount value to zero
document.querySelector('.mark-all-or-no').addEventListener('click', () => {
    for (const read of unread) {
        read.removeAttribute('state')
        notificationCount.value = notificationCount.textContent = 0;
        for (const dot of smallDot) {
            dot.remove()
        }
    }
})
