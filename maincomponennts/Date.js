export class D{
    constructor(name) {
        this.name = name;
        this.tt = document.getElementById('time');
    }
    
    weekend(){
        
        let d = new Date();
        const countedTime = 5 - d.getDay() 
        const time = document.createElement('div');
        this.tt.addEventListener('click',()=>{
            console.log(321);
            time.innerText = countedTime;
        })
        this.tt.appendChild(time);
    }    
        
}