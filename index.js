const colinp = document.querySelectorAll('.clr input');
const gradbox = document.querySelector('.gradbox');
const menu = document.querySelector('.i select');
const textarea = document.querySelector('.ed');
const refresh = document.querySelector('.Refresh');
const copy = document.querySelector('.Copycode');

const rancolfun =()=>{
    let randomclr = Math.floor(Math.random() * 16777215).toString(16);
    let clr = "#" + randomclr
    return clr;
}

const generateGrad = (random)=>{
    if(random){
        colinp[0].value = rancolfun();
        colinp[1].value = rancolfun();
    }

    const gradient = `linear-gradient(${menu.value}, ${colinp[0].value}, ${colinp[1].value})`
    gradbox.style.background= gradient;
    textarea.value = `background: ${gradient}`

}

colinp.forEach(i => {
    i.addEventListener("input", ()=> generateGrad(false))
});


menu.addEventListener("change",generateGrad);
refresh.addEventListener("click",()=> generateGrad(true));

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(textarea.value);
    copy.innerHTML = "Copied";
    setInterval(  () => copy.innerHTML = "Copy Code", 1000);
});

// navigator.clipboard.writeText = gradient;