const options=document.querySelector(".nav3")
const textarea=document.querySelector("textarea")
const fonts=document.querySelectorAll(".textstyle button")[0]
const increaseText=document.querySelectorAll(".textstyle button")[1]
const decreaseText=document.querySelectorAll(".textstyle button")[2]
const bold=document.querySelectorAll(".textstyle button")[3]
const underline=document.querySelectorAll(".textstyle button")[4]
const italic=document.querySelectorAll(".textstyle button")[5]
const sentence=document.querySelectorAll(".textstyle button")[6]
const color=document.querySelector("#color")
const align=document.querySelectorAll(".textstyle button")[8]
const not=document.querySelector(":not(.nav3)")
//define values

let fontsize=14
let paddin=13

let alignInnerHTML=`
        
        <button style="margin:10px" onclick="left()"><i class="fa fa-align-left" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="right()"><i class="fa fa-align-right" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="center()"><i class="fa fa-align-center" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="justify()"><i class="fa fa-align-justify" aria-hidden="true"></i></button>
`
function left(){
    textarea.style.textAlign="left"
}
function right(){
    textarea.style.textAlign="right"
}
function center(){
    textarea.style.textAlign="center"
}
function justify(){
    textarea.style.textAlign="justify"
}
let sentenceInnerHTML=`
        <button style="margin:10px" onclick="nocase()">None</button>
        <button style="margin:10px" onclick="upperCase()">UPPERCASE</button>
        <button style="margin:10px" onclick="lowercase()">lowercase</button>
        <button style="margin:10px" onclick="capitalize()">Capitalize each word</button>
`
function nocase(){
    textarea.style.textTransform="none"
    sentence.style.textTransform="none"
}
function upperCase(){
    textarea.style.textTransform="uppercase"
    sentence.style.textTransform="uppercase"
}

function lowercase(){
    textarea.style.textTransform="lowercase"
    sentence.style.textTransform="lowercase"
}

function capitalize(){
    textarea.style.textTransform="capitalize"
    sentence.style.textTransform="capitalize"
}
let fontsInnerHTML=`
        <button>sans-serif</button>
        <button>Helvatica</button>
        <button>Sans serif</button>
        <button>Cambria</button>
        <button>Impact</button>
        <button>Arial</button>
        <button>Curisve</button>
    `
    let underlineInnerHTML=`
        <button onclick="linebeneath()" style="margin:10px"><u>U</u></button>
        <button onclick="strike()" style="margin:10px"><strike>U</strike></button>
        <button onclick="overline()" style="text-decoration: overline;margin:10px">U</button>
    `

    function linebeneath(){
        textarea.style.textDecoration="underline"
        underline.style.textDecoration="underline"
    }

    function strike(){
        textarea.style.textDecoration="line-through"
        underline.style.textDecoration="line-through"
    }
    function overline(){
        textarea.style.textDecoration="overline"
        underline.style.textDecoration="overline"
    }
//functions


align.addEventListener("click", function(){
    
    if(options.innerHTML===alignInnerHTML){
        options.innerHTML=""
        this.style.background="white"
        this.style.color="black"
    }else{
        options.innerHTML=alignInnerHTML
        this.style.background="black"
        this.style.color="white"
    }
    underline.style.background="white"
    underline.style.color="black"

    fonts.style.background="white"
    fonts.style.color="black"

    sentence.style.background="white"
    sentence.style.color="black"

    
})
sentence.addEventListener("click", function(){
    
    if(options.innerHTML===sentenceInnerHTML){
        options.innerHTML=""
        this.style.background="white"
        this.style.color="black"
    }else{
        options.innerHTML=sentenceInnerHTML
        this.style.background="black"
        this.style.color="white"
    }
    underline.style.background="white"
    underline.style.color="black"

    fonts.style.background="white"
    fonts.style.color="black"

    align.style.background="white"
    align.style.color="black"
    
})

fonts.addEventListener("click", function(){
    
    if(options.innerHTML===fontsInnerHTML){
        options.innerHTML=""
        this.style.background="white"
        this.style.color="black"
    }else{
        options.innerHTML=fontsInnerHTML
        this.style.background="black"
        this.style.color="white"
    }
    underline.style.background="white"
    underline.style.color="black"
    
    sentence.style.background="white"
    sentence.style.color="black"

    align.style.background="white"
    align.style.color="black"
})
    underline.addEventListener("click",function(){
    if(options.innerHTML===underlineInnerHTML){
        options.innerHTML=""
        this.style.background="white"
        this.style.color="black"
    }else{
        options.innerHTML=underlineInnerHTML
        this.style.background="black"
        this.style.color="white"
    }
    fonts.style.background="white"
    fonts.style.color="black"

    sentence.style.background="white"
    sentence.style.color="black"

    align.style.background="white"
    align.style.color="black"
})
increaseText.addEventListener("click", function(){
    fontsize+=5
    textarea.style.fontSize=`${fontsize}px`
})

decreaseText.addEventListener("click", function(){
    fontsize-=5
    textarea.style.fontSize=`${fontsize}px`
})

bold.addEventListener("click",function(){
    if(textarea.style.fontWeight==="bold"){
        textarea.style.fontWeight="100" 
        this.style.fontWeight="100"
    }else{
        textarea.style.fontWeight="bold"
        this.style.fontWeight="bold" 
    }
})

    italic.addEventListener("click",function(){
    if(textarea.style.fontStyle==="italic"){
        textarea.style.fontStyle="normal" 
        this.style.fontStyle="normal"
    }else{
        textarea.style.fontStyle="italic"
        this.style.fontStyle="italic"
    }
})
color.addEventListener("change", function(){
    textarea.style.color=this.value
})