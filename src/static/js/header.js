
handleModalMenu();
function handleModalMenu() {
    let isOpenModalMenu = false;
    const htmlBtnOpenModalMenu = document.getElementById('htmlBtnOpenModalMenu');
    const htmlBtnCloseModalMenu = document.getElementById('htmlBtnCloseModalMenu');
    function toggleModal(modalName) {
        const modal = document.getElementById(modalName);
        const body = document.body;
        if (isOpenModalMenu) {
            modal.style.display = 'none';
            body.classList.remove('overflow-y-hidden');
        } else {
            modal.style.display = 'block';
            body.classList.add('overflow-y-hidden');
        }
        isOpenModalMenu = !isOpenModalMenu;
    };
    htmlBtnOpenModalMenu.onclick = () => toggleModal('modelMenu');
    htmlBtnCloseModalMenu.onclick = () => toggleModal('modelMenu');
}

const toggles = document.querySelectorAll('.htmlBtnOpenMenuChildren');
toggles.forEach(htmlBtnOpenMenuChildren => {
    htmlBtnOpenMenuChildren.addEventListener('click', function () {
        const subMenu = this.closest('li').querySelector('.sub_menu');
        if (subMenu.style.display === "none" || subMenu.style.display === "") {
            subMenu.style.display = "block";
        } else {
            subMenu.style.display = "none";
        }
    });
});



function onLoad() {
}
window.onload = onLoad;