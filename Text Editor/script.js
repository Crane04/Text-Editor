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

//let's save to local storage, you should use an array for this later
textarea.value=localStorage.getItem("textareavalue")

textarea.style.fontFamily=localStorage.getItem("fontFamily")
textarea.style.fontSize=localStorage.getItem("fontSize")
textarea.style.fontWeight= localStorage.getItem("fontWeight")
bold.style.fontWeight= localStorage.getItem("fontWeight")
textarea.style.textDecoration=localStorage.getItem("textDecoration") 
underline.style.textDecoration=localStorage.getItem("textDecoration")        
textarea.style.fontStyle=localStorage.getItem("italic")
italic.style.fontStyle=localStorage.getItem("italic")
color.value=localStorage.getItem("color")
textarea.style.color=localStorage.getItem("color")
textarea.style.textTransform=localStorage.getItem("textTransform")
sentence.style.textTransform=localStorage.getItem("textTransform")
//define values

let fontsize=14
let paddin=13

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
    localStorage.setItem("fontSize",textarea.style.fontSize)
})

decreaseText.addEventListener("click", function(){
    fontsize-=5
    textarea.style.fontSize=`${fontsize}px`
    localStorage.setItem("fontSize",textarea.style.fontSize)
})

bold.addEventListener("click",function(){
    if(textarea.style.fontWeight==="bold"){
        textarea.style.fontWeight="100" 
        this.style.fontWeight="100"
    }else{
        textarea.style.fontWeight="bold"
        this.style.fontWeight="bold" 
    }
    
    localStorage.setItem("fontWeight",textarea.style.fontWeight)
})

    italic.addEventListener("click",function(){
    if(textarea.style.fontStyle==="italic"){
        textarea.style.fontStyle="normal" 
        this.style.fontStyle="normal"
    }else{
        textarea.style.fontStyle="italic"
        this.style.fontStyle="italic"
    }
    localStorage.setItem("italic",textarea.style.fontStyle)
})
color.addEventListener("change", function(){
    textarea.style.color=color.value
    localStorage.setItem("color",color.value)
})

//local storage
textarea.addEventListener("input", function(){
    localStorage.setItem("textareavalue",textarea.value)
})
let alignInnerHTML=`
        
        <button style="margin:10px" onclick="left()"><i class="fa fa-align-left" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="right()"><i class="fa fa-align-right" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="center()"><i class="fa fa-align-center" aria-hidden="true"></i></button>
        <button style="margin:10px" onclick="justify()"><i class="fa fa-align-justify" aria-hidden="true"></i></button>
`
textarea.style.textAlign=localStorage.getItem("textAlign")
align.innerHTML=localStorage.getItem("align")
function left(){
    textarea.style.textAlign="left"
    align.innerHTML=`<i class="fa fa-align-left" aria-hidden="true"></i>`
    localStorage.setItem("textAlign",textarea.style.textAlign)
    localStorage.setItem("align", align.innerHTML)
}
function right(){
    textarea.style.textAlign="right"
    align.innerHTML=`<i class="fa fa-align-right" aria-hidden="true"></i>`
    localStorage.setItem("textAlign",textarea.style.textAlign)
    localStorage.setItem("align", align.innerHTML)
}
function center(){
    textarea.style.textAlign="center"
    align.innerHTML=`<i class="fa fa-align-center" aria-hidden="true"></i>`
    localStorage.setItem("textAlign",textarea.style.textAlign)
    localStorage.setItem("align", align.innerHTML)
}
function justify(){
    textarea.style.textAlign="justify"
    align.innerHTML=`<i class="fa fa-align-justify" aria-hidden="true"></i>` 
    localStorage.setItem("textAlign",textarea.style.textAlign)
    localStorage.setItem("align", align.innerHTML)
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
    localStorage.setItem("textTransform",textarea.style.textTransform)
}
function upperCase(){
    textarea.style.textTransform="uppercase"
    sentence.style.textTransform="uppercase"
    localStorage.setItem("textTransform",textarea.style.textTransform)
}

function lowercase(){
    textarea.style.textTransform="lowercase"
    sentence.style.textTransform="lowercase"
    localStorage.setItem("textTransform",textarea.style.textTransform)
}

function capitalize(){
    textarea.style.textTransform="capitalize"
    sentence.style.textTransform="capitalize"
    localStorage.setItem("textTransform",textarea.style.textTransform)
}
let fontsInnerHTML=`
        <button onclick="Lucida()" style="font-family:Lucida-sans;">Lucida-sans</button>
        <button onclick="sans()" style="font-family:sans-serif;">sans-serif</button>
        <button onclick="impact()" style="font-family:Impact;">Impact</button>
        <button onclick="arial()" style="font-family:Arial;">Arial</button>
        <button onclick="cursive()" style="font-family:cursive;">Curisve</button>
    `
    function cursive(){
        textarea.style.fontFamily="cursive"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
        fonts.style.fontFamily="cursive"
    }

    function arial(){
        textarea.style.fontFamily="Arial"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
    }
    function impact(){
        textarea.style.fontFamily="Impact"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
    }
    function helvatica(){
        textarea.style.fontFamily="Helvatica"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
    }
    function Lucida(){
        textarea.style.fontFamily="Lucida Sans Unicode"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
    }
    function sans(){
        textarea.style.fontFamily="sans-serif"
        localStorage.setItem("fontFamily",textarea.style.fontFamily)
    }
    let underlineInnerHTML=`
        <button onclick="noUnderline()" style="margin:10px">U</button>
        <button onclick="linebeneath()" style="margin:10px"><u>U</u></button>
        <button onclick="strike()" style="margin:10px"><strike>U</strike></button>
        <button onclick="overline()" style="text-decoration: overline;margin:10px">U</button>
    `

    function linebeneath(){
        textarea.style.textDecoration="underline"
        underline.style.textDecoration="underline"
        localStorage.setItem("textDecoration",underline.style.textDecoration) 
    }

    function strike(){
        textarea.style.textDecoration="line-through"
        underline.style.textDecoration="line-through"
        localStorage.setItem("textDecoration",underline.style.textDecoration)
    }
    function overline(){
        textarea.style.textDecoration="overline"
        underline.style.textDecoration="overline"
        localStorage.setItem("textDecoration",underline.style.textDecoration)
    }
    function noUnderline(){
        
        textarea.style.textDecoration="none"
        underline.style.textDecoration="none"
        localStorage.setItem("textDecoration",underline.style.textDecoration)
    }