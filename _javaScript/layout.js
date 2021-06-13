const layout = createLayout()

function createLayout(){
    const form = document.querySelector('form')
    const layout = ['input','br',1,2,3,'+','br',4,5,6,'-','br',7,8,9,'*','br','CE',0,'=','/']
    
    const load = () => {
        const template = layout.reduce((acc,item)=>{
            if(item =="input"){
                return acc += `<input type="text"/>`	
                }
            else if(item == "br") {
                return	acc += `<br>`
                }
            else {
                return acc += `<button>${item}</button>`
            }
        },"")
        
        form.innerHTML += template	
    }

    return { load, form }       
}

document.onload = layout.load()

export const visor = document.querySelector('input')
export default createLayout