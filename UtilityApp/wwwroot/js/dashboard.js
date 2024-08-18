"use strict"

const sidebar = document.querySelector('.sidebar')
const hambuger = document.querySelector('.hambuger')
const toggleItems = document.querySelectorAll('.toggle')
const sidebarLinks = document.querySelectorAll('.link')
const menuNames = document.querySelectorAll('.menu-name')
hambuger.addEventListener('click', function () {
    if (sidebar.classList.contains('sidebar-opened')) {
        sidebar.classList.remove('sidebar-opened')
        menuNames.forEach(x => {
            x.classList.remove('menu-hidden')
        })
    }
    else {
        sidebar.classList.add('sidebar-opened')
        menuNames.forEach(x => {
            x.classList.add('menu-hidden')
        })
    }
})

sidebarLinks.forEach(x => {
    x.addEventListener('click', function () {
        sidebarLinks.forEach(i => i.classList.remove('link-active'))
        this.classList.add('link-active')
    })
})