
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
        const downloadButton = document.querySelector('#download-button');
        const downloadSvgPath1 = downloadButton.querySelector('#Vector');
        const downloadSvgPath2 = downloadButton.querySelector('#Vector_2');
        menuIcon.addEventListener("mouseover", ()=> {
            console.log('hovering');
            menuIcon.classList.add('hovering');
            menuIconSvg.setAttribute('fill', "#EB867F");

        });

        menuIcon.addEventListener("mouseout", ()=> {
            console.log('not hovering');
            menuIcon.classList.remove('hovering');
            menuIconSvg.setAttribute('fill', "black");
        });

        downloadButton.addEventListener("mouseover", ()=> {
            console.log('hovering');
            downloadButton.classList.add('hovering');
            downloadSvgPath1.setAttribute('stroke', "#EB867F");
            downloadSvgPath2.setAttribute('stroke', "#EB867F");

        });

        downloadButton.addEventListener("mouseout", ()=> {
            console.log('not hovering');
            downloadButton.classList.remove('hovering');
            downloadSvgPath1.setAttribute('stroke', "white");
            downloadSvgPath2.setAttribute('stroke', "white");
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


 // for animations
 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));

