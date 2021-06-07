export default class Status{
    constructor(name,status,text,element){
        this.out = document.getElementById('out');
        this.body = document.body;
        this.post = document.getElementById('post');
        this.main = document.getElementById('main-post');
        this.user ={
            _id:{
                postID:[],
                postNum: 0
            },
            observer:[],
            name:name,
            status: status,
            text:text,
            img:{
                avatar:['./img/me.jpg']
            }
        }
    }

avatar(){


  
 
    
}
createpost(){
    this.post.addEventListener('click',(e)=>{
          
            let ID =  ()=>{

                return '_' + Math.random().toString(36).substr(2, 9)
            };
            this.user._id.postNum +=1 ;
            console.log(this.user._id.postNum);
            this.user._id.postID.push(ID());  
            console.log(this.user._id.postID);



            const post = document.createElement('div');
            post.classList = 'grid grid-cols-7 m-2 border-4 w-3/4 m-auto mt-10'
            const txt1 = document.createElement('p');
            const txt2 = document.createElement('textarea');
            const txt3 = document.createElement('label');
            const inp = document.createElement('input');
            const img = document.createElement('img');
            img.width = 30;
            img.src = './img/nm.png'
            inp.setAttribute('type','file')
            inp.setAttribute('style','display:none')

            // txt3.width = 30

            txt3.addEventListener('load', (event)=>{
                
            })
            txt3.appendChild(img);
            txt3.appendChild(inp);
            
            // txt3.classList = '"inline-block h-8 w-8  rounded-full ring-1 ring-gray-700"'
            const txt4 = document.createElement('img');
            txt4.src = './img/emoji.jpg'
            txt4.width = 30
            txt4.addEventListener('mouseover',()=>{
                console.log(12321);
            })
            
            
            // ###########################################################################################
            const txt5 = document.createElement('p');
            txt5.addEventListener('click', (e)=>{
                    const create = document.createElement('div');
                    create.classList = 'block bg-gray-100 w-5/6 m-auto mt-14 max-h-max border-2 border-dotted mt-20 font-indie text-xl hover:bg-gray-300 break-all z-3 '
                    // const commentOut = document.createElement('p');
                    // commentOut.classList = 'bg-white p-4 border-2 rounded-3xl'
                    // commentOut.innerText = ''
                    
                    // count the liuke
                    
                    
                    // time and date && name
                    const grid = document.createElement('div');
                    grid.classList = 'grid grid-cols-10  border-b-2  m-auto'
                    const mostLeft = grid.appendChild(document.createElement('img'))
                    
                    mostLeft.classList = 'col-start-0 col-end-1 inline-block h-4 w-4 rounded-full ring-2 ring-white'
                    mostLeft.src = this.user.img.avatar[0]
                    const left = grid.appendChild(document.createElement('a'))
                    left.setAttribute('href','http://www.google.com')
                    left.setAttribute('target','_blank')
                    left.classList = 'col-start-1 col-end-4 text-xs list-none hover:underline '
                    left.innerText = `${this.user.name} posted:...`
                    const left2 = grid.appendChild(document.createElement('li'))
                    left2.classList = 'col-start-4 col-end-8 text-xs list-none'
                    left2.innerText = ` ${new Date().toLocaleString()}`
                    const right  = grid.appendChild(document.createElement('li'))
                    right.classList = 'col-start-11 col-end-11  list-none text-xs hover:bg-gray-100 cursor-default'
                    right.innerText = 'X'
                    right.addEventListener('click',()=>{
                        // e.currentTarget.remove()
                        console.log(document.body.children[2].children[0].remove());
                    })
                    // info
                    // const info = document.createElement('div');
                    // info.classList = 'text-xs relative border-b max-w-max border-black'
                    // info.innerHTML = grid
                    ;
                    
                    
                    
                    //manage
                    const voteBar = document.createElement('div');
                    const commentOut = document.createElement('p');
                    const msg = document.createElement('input');
                    msg.classList= 'relative top-16 float-right h-8 bg-gray-200  outline-none  text-xs ' 
                    
                    msg.setAttribute('placeholder','comment....');
                    // msg.setAttribute('submit','dasdas')
                    msg.addEventListener("keyup", function(event) {
                        if (event.keyCode === 13) {
                            
                            const insideComment = document.createElement('p');
                            insideComment.classList = 'border-2 text-xs my-4'
                            insideComment.innerText = this.name +  msg.value
                            commentOut.appendChild(insideComment);
                            commentOut.classList = 'bg-white p-4 border-2 mt-10 rounded-3xl'
                        }
                    });
                    // comment
                    
                    // commentOut.innerText = 'dasdasd';


                    voteBar.classList = 'grid grid-cols-2 border-2 max-w-max relative top-6 bg-blue-200 z-2 mix-blend-soft-light'     
                    const like = document.createElement('a');
                    const dislike = document.createElement('a');
                    // const edit = document.createElement('li');
                    
                    // positive and negative count  + LIKE 
                    const positiveCounter = [] 
                    const negativeCounter =  []
                    like.classList = 'col-start-1 col-end-2 border-2 max-w-max list-none   text-xs z-10 '
                    like.innerText = 'like'
                    like.addEventListener('click',(e)=>{
                        
                        if(like && positiveCounter == 0 ){
                            positiveCounter.push(1) ;   
                            negativeCounter.pop();      
                            like.classList.add('bg-blue-500')      
                            dislike.classList.remove('bg-red-500')         
                            console.log(positiveCounter);
                        }else if (like && positiveCounter >0){
                            positiveCounter.pop();
                            like.classList.remove('bg-blue-500')               
                            console.log(positiveCounter);
                        }
                    })
                    dislike.classList = 'col-start-2 col-end-2 border-2 max-w-max list-none text-xs '
                    dislike.innerText = 'dis'
                    dislike.addEventListener('click',()=>{
                        if(dislike && negativeCounter == 0){
                            negativeCounter.push(-1);
                            positiveCounter.pop();
                            dislike.classList.add('bg-red-500')
                            like.classList.remove('bg-blue-500')               
                            console.log(negativeCounter);
                        }else if(dislike && negativeCounter < 0){
                            negativeCounter.pop();
                            dislike.classList.remove('bg-red-500')
                            console.log(negativeCounter);
                        }
                    })
                    // voteBar.appendChild(edit)
                    // del
                    
                    // 
                    
                    voteBar.appendChild(like)
                    voteBar.appendChild(dislike)
                    
                    
                    //    obs
                    this.user.observer.push(txt2.value);
                    create.innerText = this.user.observer[0];
                    
                    
                    
                    
                    document.body.children[1].children[0].remove();    
                    console.log(document.body);
                    
                    
                    create.append(commentOut);
                    create.appendChild(msg)
                    create.appendChild(voteBar)
                    create.prepend(grid);
                    this.out.append(create) 
                    this.user.observer.pop();
                    
                },{once:true})
                
                
                // this.main.classList = 'border
                txt1.classList = 'col-start-4 col-span-4'
                txt2.classList = 'col-start-1 col-span-7   h-52 outline-none border-b-2 border-t-2'
                txt3.classList = 'col-start-2 col-span-4 cursor-pointer'
                txt4.classList = 'col-end-8 col-span-1 '
                txt5.classList = 'col-start-3 col-span-3 border-2  text-center mb-2 hover:bg-gray-100'
                
                
                txt1.textContent = this.user.name
                txt2.textContent = 'CLASSdsadaS'
                
                txt4.textContent = 'emoji'
                txt5.textContent = 'POST'
                
                post.appendChild(txt1);
                post.appendChild(txt2);
                post.appendChild(txt3);
                post.appendChild(txt4);
                post.appendChild(txt5);
                
                if(this.main.appendChild(post)){
                    // document.body.children[1].children[3].remove();
                };
            });
            
        }
        
        
        
    }
    
    
    