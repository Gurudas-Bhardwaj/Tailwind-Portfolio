const Navbar=document.getElementById("Navbar");
const NavbarFake=document.getElementById("NavbarFake");





window.addEventListener('scroll',()=>{
    if (window.scrollY>=500){
        Navbar.style.position="fixed";
    }else if(window.scrollY<500){
        Navbar.style.position="sticky"
    }

    if (window.scrollY>=500){
        NavbarFake.style.position="sticky"
    }else if(window.scrollY<500){
        NavbarFake.style.position="fixed"
    }
    
})


const Hamburg=document.getElementById("Hamburg");
const ToggleNav=document.getElementById("ToogleNav");
const ToggleNavItem=document.getElementById("ToogleNavItem");
let checkClick=true;

Hamburg.addEventListener('click',()=>{
    if (checkClick){
        ToggleNav.style.height="250px"
        ToggleNavItem.style.display='flex'
        checkClick=false
    }
    else if (checkClick==false){
        ToggleNav.style.height='0px'
        ToggleNavItem.style.display='none'
        checkClick=true
    }
})





window.onload=()=>{
    // window.scrollTo(0, 0);
}


const allSection=document.querySelectorAll('section');
const allNavlink=document.querySelectorAll('header a');



allNavlink.forEach((e) => {
    e.addEventListener('click', (f) => {
       
        allNavlink.forEach(link => link.classList.remove('active'));
        
       
        e.classList.add('active');
        
    });
});