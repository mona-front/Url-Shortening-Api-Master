const menu=document.querySelector(".HambergerMenu")
const header=document.querySelectorAll(".responsive")
const createshortlink=document.querySelector(".BtnShort")
let input = document.getElementById("urlinput")
const PerformanceCopy=document.querySelector(".PerformanceCopy")

const buttonCopy=document.querySelector(".BtnCopy")

    menu.addEventListener("click", ()=>{
        for(let i=0; i<header.length;i++){
            header[i].classList.toggle("active")
        }
        
        
    })
    createshortlink.addEventListener("click",(e)=>{
        
            
        
    // creat Element

        // validate()
        e.preventDefault()
        if(input.value === ""){
            let message=document.querySelector(".MessageVal")
            message.classList.toggle("active")
            input.classList.toggle("active")
        }
        
        else
       {
        const divshort=document.createElement("div")
        divshort.className="ShortLinkItem"
        const longLink=document.createElement("div")
        longLink.className="longLink"
        const paragraph=document.createElement("p")
        paragraph.innerText=input.value
        const hr=document.createElement("hr")
        hr.className="borderResponsive"
        const shortlink=document.createElement("div")
        shortlink.classList="ShortLinks"
        const paragraphshort=document.createElement("input")
        paragraphshort.classList="textShortLink"
        const btn=document.createElement("button")
        btn.className="BtnCopy"
        btn.innerText="Copy"
        // input.value=""

// append
 PerformanceCopy.appendChild(divshort)
 divshort.appendChild(longLink)
 longLink.appendChild(paragraph)
 divshort.appendChild(hr)
 divshort.appendChild(shortlink)
 shortlink.appendChild(paragraphshort)
 divshort.appendChild(btn)
                         
       }
   
       buttonCopy.addEventListener("click", function CopyClipboard() {
          
        let copyText =  document.querySelector('.textShortLink')
        copyText.select();
        console.log()
        copyText.setSelectionRange(0, 99999); 
      
       
        navigator.clipboard.writeText(copyText.value);
      
      
        buttonCopy.innerText="Copied!"

        buttonCopy.classList.toggle("active")
        
      })    
      shortUrl()
    })


    function shortUrl() {
        const input = document.getElementById('urlinput').value;
        document.querySelector('.textLink').innerHTML = input;
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}/`).then(response => response.json()).then(res => {
            document.querySelector('.textShortLink').value = res.result.short_link;
        })
    }