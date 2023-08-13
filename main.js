const noti_drawer = document.querySelector('.noti_drawer')
const noti = () => {
    noti_drawer.style.top="2%";
    noti_close();
}

const noti_close = () => {
    noti_drawer.addEventListener('click', () => {
        noti_drawer.style.top="-30%";
    })
}