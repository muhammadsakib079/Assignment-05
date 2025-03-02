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
    .addEventListener('click', function () {
        clickCount++;
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


document.getElementById('btn_c_1')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Fix Mobile Button Issue at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task')
            
        }
    })


document.getElementById('btn_c_2')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Add Dark Mode at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task')
            document.getElementById('removeit').remove('0')
        }
    })

document.getElementById('btn_c_3')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Optimize Home page at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task');
            document.getElementById('removeit').remove('0')
        }
    })

document.getElementById('btn_c_4')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Add new emoji 🤲 at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task');
            document.getElementById('removeit').remove('0')
        }
    })

document.getElementById('btn_c_5')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Integrate OpenAI API at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task');
            document.getElementById('removeit').remove('0')
        }
    })

document.getElementById('btn_c_6')
    .addEventListener('click', function () {
        alert('Board updated successfully')
        this.disabled = true;
        let historylocation = document.getElementById('history');
        let createElement1 = document.createElement('div');
        createElement1.classList.add('bg-slate-100', 'p-4','m-4', 'rounded-xl');
        let createElement2 = document.createElement('p');
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes().toString().padStart(2, '0'); // E
        let seconds = now.getSeconds().toString().padStart(2, '0'); // 
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        createElement2.innerText = `You have Complete The Task Improve Job searching at ${timeString}`;
        createElement1.appendChild(createElement2);
        historylocation.appendChild(createElement1);
        totalTask -= 1
        totalTaskMark += 1
        document.getElementById('task').innerText = totalTask;
        document.getElementById('task_mark').innerText = totalTaskMark;
        if (totalTask == 0) {
            alert('Congrates! You have completed all the current task');
            document.getElementById('removeit').remove('0')
        }
    })

document.getElementById('clear_history')
.addEventListener('click', function(){
    const historyloc = document.getElementById('history');
    historyloc.innerHTML = ''
})

document.getElementById('blog_sector')
.addEventListener('click', function(){
    window.location.href = 'blog.html';
})
