const Navbar=document.getElementById("Navbar");
const NavbarFake=document.getElementById("NavbarFake");





window.addEventListener('scroll',()=>{const Navbar=document.getElementById("Navbar");
const NavbarFake=document.getElementById("NavbarFake");

const Submit=document.getElementById('submitBtn')

const NameData=document.getElementById("Name")
const EmailData=document.getElementById("Email")
const ContactData=document.getElementById("Number")
const SubjectData=document.getElementById("Subject")
const MessageData=document.getElementById("Message")


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



async function sendData(){
    let Name=NameData.value
    let Email=EmailData.value
    let Number=ContactData.value
    let Subject=SubjectData.value
    let Message=MessageData.value
    try{
    let response=await fetch('https://gurudas.pythonanywhere.com/api/ContactData/',{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name,Email,Number,Subject,Message})
    })
    if (response.ok){
        console.log("Form Successfully Sumbitted");
    }else {
        console.log("unsuccesfull");
    }}
    catch(error){
        console.log(error);
    }
}

Submit.addEventListener('click',()=>{
    sendData()
})



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

