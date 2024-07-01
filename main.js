

// NAVBAR RELATED
{
    const sidebar = document.querySelector('.sidebar');
    
    function revealSidebar() {
        sidebar.classList.add('active');
    }
    
    function closeSidebar() {
        sidebar.classList.remove('active');
    }

    const menuIcon = document.querySelector('#menu-icon');
    const menuIconSvg = document.querySelector('#menu-icon-svg');
    menuIcon.addEventListener("mouseover", ()=> {
        console.log('hovering');
        menuIcon.classList.add('hovering');
        menuIconSvg.setAttribute('fill', "#EC5D53");

    });

    menuIcon.addEventListener("mouseout", ()=> {
        console.log('not hovering');
        menuIcon.classList.remove('hovering');
        menuIconSvg.setAttribute('fill', "black");
    });

}


