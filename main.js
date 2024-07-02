
const sidebar = document.querySelector('.sidebar');
        
function revealSidebar() {
    sidebar.classList.add('active');
}

function closeSidebar() {
    sidebar.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // NAVBAR RELATED
    {

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

    // HOMEPAGE RELATED
    {
        const socialIcons = document.querySelectorAll('.social-icons li');
        socialIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                if (icon.classList.contains('active')){
                    icon.classList.remove('active');
                }
                else {
                    socialIcons.forEach(i => i.classList.remove('active'));
                    // Add 'active' class to the clicked icon
                    icon.classList.add('active');
                }
                
            });
        });
    }
 });

