/** Task & task point */
let totalTaskMark = 23;
document.getElementById('task_mark').innerText = totalTaskMark;
let totalTask = 6;
document.getElementById('task').innerText = totalTask;

/** Date define */
const today = new Date();
const dayName = today.toLocaleDateString('en-US', { weekday: 'short' }); 
const mm = String(today.getMonth() + 1).padStart(2, '0'); 
const dd = String(today.getDate()).padStart(2, '0'); 
const yyyy = today.getFullYear();
const formattedDate = `${mm}-${dd}-${yyyy}`;
const dateName = `${dayName}`;
document.getElementById('today_date').innerText = formattedDate;
document.getElementById('date_name').innerText = dateName;

/**Click Count & Background-Color Change */
let clickCount = 0;
document.getElementById('bg_theme')
.addEventListener('click', function () { clickCount++;
    switch (clickCount) {
        case 1:
            document.body.style.background = '#51e2f5';
            break;
        case 2:
            document.body.style.background = '#9df9ef';
            break;
        case 3:
            document.body.style.background = '#edf756';
            break;
        case 4:
            document.body.style.background = '#ffa8B6';
            break;
        case 5:
            document.body.style.background = '#a28089';
            clickCount = 0; 
            break;
    }
})