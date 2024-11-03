const toggleBtn = document.querySelector('.sider-toggle')
const closeBtn = document.querySelector('.close-button')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar')
})