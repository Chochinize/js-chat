export default class UserLog {
    constructor() {
        this.menu = {
            logUp: document.getElementById('logup'),
            logIn: document.getElementById('Login')

        }


    }

    ln() {

     this.menu.logUp.addEventListener('click',()=>{
         const form =  document.createElement('form');
         const label = form.appendChild(document.createElement('label'));
         const inputName = label.appendChild(document.createElement('input'));
         const inputPass = label.appendChild(document.createElement('input'));
         const inputEmail = label.appendChild(document.createElement('input'));

         input.classList = 'bg-blue-100'
         form.classList = 'absolute top-2 bg-red-200 w-10 h-10'
         document.body.appendChild(form);
         
        })
        
 


   


    }

}