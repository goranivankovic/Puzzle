







  


   let obj2 ={
       jed:document.querySelector('.jed'),
       dva:document.querySelector('.dva'),
       tri:document.querySelector('.tri'),
       cet:document.querySelector('.cet'),
       pet:document.querySelector('.pet'),
       ses:document.querySelector('.ses'),
       sed:document.querySelector('.sed'),
       osa:document.querySelector('.osa'),
       dev:document.querySelector('.dev'),
       des:document.querySelector('.des'),
       jedN:document.querySelector('.jedN'),
       dvaN:document.querySelector('.dvaN'),
       triN:document.querySelector('.triN'),
       cetN:document.querySelector('.cetN'),
       petN:document.querySelector('.petN'),
       sesN:document.querySelector('.sesN'),
       score2:document.querySelector('.score2'),
       truys:document.querySelector('.truys'),
       broj:1,
       pokusaj:1

      

   }

   //ObjedNct with button reset & Function funReset()
   let obj={
    resBtn:document.getElementById('reset'),
   
    funReset(){
        let pic =document.querySelectorAll('.pic');
       let score2 = document.querySelector('.score2');
       let truys =document.querySelector('.truys');
        pic.forEach(el=>{
         //    el.classList.add('numbCent');
            el.innerHTML='';
            el.style.display='flex'
           
            
           
        })
        if (obj2.broj>1||obj2.pokusaj>0) {
            score2.textContent=obj2.broj=1
            score2.style.display='none';
            truys.textContent=obj2.pokusaj=1
            truys.style.display='none'
        
            
        }
       
     


        

 
 }

    
}
 //Event listner for reset button

 obj.resBtn.addEventListener('click',obj.funReset)




  // Eventlistner number 1
 obj2.jed.addEventListener('click',()=>{
    obj2.jed.textContent='1'
    obj2.jed.classList.add('numbCent')
    
   
     if (obj2.jed.textContent=='1'&& obj2.ses.textContent=='1') {
       
          setTimeout(()=>{
              
            obj2.jed.textContent=''
            obj2.ses.textContent=''
            obj2.jed.style.display='none'
            obj2.ses.style.display='none'
            obj2.score2.style.display='inline-flex'
            
            obj2.score2.innerHTML = obj2.broj++;
            
            
            alert('you have a match :-)')
           
            
          },500)


        }else{
            setTimeout(()=>{
                obj2.jed.textContent=''
                obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
                 
            },1500)
        }
        
    
    
     
 })

     // Eventlistner number 2
 obj2.dva.addEventListener('click',()=>{
    obj2.dva.textContent='4'
    obj2.dva.classList.add('numbCent')

    if (obj2.dva.textContent=='4'&& obj2.jedN.textContent=='4') {
        
    

    setTimeout(()=>{
            
    obj2.dva.textContent=''
    obj2.jedN.textContent=''
    obj2.dva.style.display='none'
    obj2.jedN.style.display='none'
    obj2.score2.innerHTML = obj2.broj++;
    obj2.score2.style.display='inline-flex'
    alert('you have a match :-)')
       

    },500)
}else{
    setTimeout(()=>{
        obj2.dva.textContent=''
        obj2.truys.style.display='inline-flex';
        obj2.truys.textContent=obj2.pokusaj++;

    },1500)
}

  

    
})


    // Eventlistner number 3
    obj2.tri.addEventListener('click',()=>{
        obj2.tri.textContent='6'
        obj2.tri.classList.add('numbCent')

        if (obj2.tri.textContent=='6'&& obj2.triN.textContent=='6') {
            
        

        setTimeout(()=>{
                
        obj2.tri.textContent=''
        obj2.triN.textContent=''
        obj2.tri.style.display='none'
        obj2.triN.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
       
        alert('you have a match :-)')
           

        },500)
    }else{
        setTimeout(()=>{
            obj2.tri.textContent=''
             obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

    
    })


        // Eventlistner number 4
        obj2.cet.addEventListener('click',()=>{
            obj2.cet.textContent='8'
            obj2.cet.classList.add('numbCent')

            if (obj2.cet.textContent=='8'&& obj2.sesN.textContent=='8') {
                
            
   
            setTimeout(()=>{
                    
            obj2.cet.textContent=''
            obj2.sesN.textContent=''
            obj2.cet.style.display='none'
            obj2.sesN.style.display='none'
            obj2.score2.innerHTML = obj2.broj++;
            obj2.score2.style.display='inline-flex'
           
            alert('you have a match :-)')
               
    
            },500)
        }else{
            setTimeout(()=>{
                obj2.cet.textContent=''
                 obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }
        
        })


            // Eventlistner number 5
    obj2.pet.addEventListener('click',()=>{
        obj2.pet.textContent='3'
        obj2.pet.classList.add('numbCent')

        if (obj2.pet.textContent=='3'&& obj2.dvaN.textContent=='3') {
            
        

        setTimeout(()=>{
                
        obj2.pet.textContent=''
        obj2.dvaN.textContent=''
        obj2.pet.style.display='none'
        obj2.dvaN.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
        
        alert('you have a match :-)')
           

        },500)
    }else{
        setTimeout(()=>{
            obj2.pet.textContent=''
            obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

       
    
    })

        // Eventlistner number 6
        obj2.ses.addEventListener('click',()=>{
            
                obj2.ses.textContent='1';
                obj2.ses.classList.add('numbCent')

                if (obj2.ses.textContent=='1'&& obj2.jed.textContent=='1') {
                  
                    setTimeout(()=>{
                        obj2.jed.textContent=''
                        obj2.ses.textContent=''
                        obj2.jed.style.display='none'
                        obj2.ses.style.display='none'
                        obj2.score2.innerHTML = obj2.broj++;
                        obj2.score2.style.display='inline-flex'
                        alert('you have a match :-)')

                    },500)


                    
                     }else{
                        setTimeout(()=>{
                            obj2.ses.textContent=''
                            obj2.truys.style.display='inline-flex';
                            obj2.truys.textContent=obj2.pokusaj++;
                    
                        },1500)
                    }

         
        
        })

            // Eventlistner number 7
    obj2.sed.addEventListener('click',()=>{
        obj2.sed.textContent='7'
        obj2.sed.classList.add('numbCent')
    
        if (obj2.sed.textContent=='7'&& obj2.dev.textContent=='7') {
            
        
    
        setTimeout(()=>{
                
        obj2.sed.textContent=''
        obj2.dev.textContent=''
        obj2.sed.style.display='none'
        obj2.dev.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
        
        alert('you have a match :-)')
           
    
        },500)
    }else{
        setTimeout(()=>{
            obj2.sed.textContent=''
            obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

        
    
    })

        // Eventlistner number 8
        obj2.osa.addEventListener('click',()=>{
            
            obj2.osa.textContent='5';
            obj2.osa.classList.add('numbCent')

            if (obj2.osa.textContent=='5'&& obj2.petN.textContent=='5') {
              
                setTimeout(()=>{
                    obj2.osa.textContent=''
                    obj2.petN.textContent=''
                    obj2.osa.style.display='none'
                    obj2.petN.style.display='none'
                    obj2.score2.innerHTML = obj2.broj++;
                    obj2.score2.style.display='inline-flex'
                    
                    alert('you have a match :-)')

                },500)


                
                 }else{
                    setTimeout(()=>{
                        obj2.osa.textContent=''
                        obj2.truys.style.display='inline-flex';
                        obj2.truys.textContent=obj2.pokusaj++;
                
                    },1500)
                }

           
        })
            // Eventlistner number 9
    obj2.dev.addEventListener('click',()=>{
        obj2.dev.textContent='7'
        obj2.dev.classList.add('numbCent')
    
        if (obj2.sed.textContent=='7'&& obj2.dev.textContent=='7') {
            
        
    
        setTimeout(()=>{
                
        obj2.sed.textContent=''
        obj2.dev.textContent=''
        obj2.sed.style.display='none'
        obj2.dev.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
       
        alert('you have a match :-)')
           
    
        },500)
    }else{
        setTimeout(()=>{
            obj2.dev.textContent=''
             obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

        
    
    })

        // Eventlistner number 10
        obj2.des.addEventListener('click',()=>{
            obj2.des.textContent='2'
            obj2.des.classList.add('numbCent')
        
            if (obj2.des.textContent=='2'&& obj2.cetN.textContent=='2') {
                
            
        
            setTimeout(()=>{
                    
            obj2.des.textContent=''
            obj2.cetN.textContent=''
            obj2.des.style.display='none'
            obj2.cetN.style.display='none'
            obj2.score2.innerHTML = obj2.broj++;
            obj2.score2.style.display='inline-flex'
            
            alert('you have a match :-)')
               
        
            },500)
        }else{
            setTimeout(()=>{
                obj2.des.textContent=''
                obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }

          
        
        })

            // Eventlistner number 11
    obj2.jedN.addEventListener('click',()=>{
        obj2.jedN.textContent='4'
        obj2.jedN.classList.add('numbCent')
    
        if (obj2.dva.textContent=='4'&& obj2.jedN.textContent=='4') {
            
        
    
        setTimeout(()=>{
                
        obj2.dva.textContent=''
        obj2.jedN.textContent=''
        obj2.dva.style.display='none'
        obj2.jedN.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
        
        alert('you have a match :-)')
           
    
        },500)
    }else{
        setTimeout(()=>{
            obj2.jedN.textContent=''
            obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

        
    
    })


        // Eventlistner number 12
        obj2.dvaN.addEventListener('click',()=>{
            obj2.dvaN.textContent='3'
            obj2.dvaN.classList.add('numbCent')
    
            if (obj2.pet.textContent=='3'&& obj2.dvaN.textContent=='3') {
                
            
    
            setTimeout(()=>{
                    
            obj2.pet.textContent=''
            obj2.dvaN.textContent=''
            obj2.pet.style.display='none'
            obj2.dvaN.style.display='none'
            obj2.score2.innerHTML = obj2.broj++;
            obj2.score2.style.display='inline-flex'
            
            alert('you have a match :-)')
               
    
            },500)
        }else{
            setTimeout(()=>{
                obj2.dvaN.textContent=''
                obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }

         
        
        })

            // Eventlistner number 13
    obj2.triN.addEventListener('click',()=>{
        obj2.triN.textContent='6'
        obj2.triN.classList.add('numbCent')

        if (obj2.tri.textContent=='6'&& obj2.triN.textContent=='6') {
            
        

        setTimeout(()=>{
                
        obj2.tri.textContent=''
        obj2.triN.textContent=''
        obj2.tri.style.display='none'
        obj2.triN.style.display='none'
        obj2.score2.innerHTML = obj2.broj++;
        obj2.score2.style.display='inline-flex'
        
        alert('you have a match :-)')
           

        },500)
    }else{
        setTimeout(()=>{
            obj2.triN.textContent=''
            obj2.truys.style.display='inline-flex';
            obj2.truys.textContent=obj2.pokusaj++;
    
        },1500)
    }

      
    
    })

        // Eventlistner number 14
        obj2.cetN.addEventListener('click',()=>{

            obj2.cetN.textContent='2'
            obj2.cetN.classList.add('numbCent')
        
            if (obj2.des.textContent=='2'&& obj2.cetN.textContent=='2') {
                
            
        
            setTimeout(()=>{
                    
            obj2.des.textContent=''
            obj2.cetN.textContent=''
            obj2.des.style.display='none'
            obj2.cetN.style.display='none'
            obj2.score2.innerHTML = obj2.broj++;
            obj2.score2.style.display='inline-flex'
            
            alert('you have a match :-)')
               
        
            },500)
        }else{
            setTimeout(()=>{
                obj2.cetN.textContent=''
                obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }

           
        
        })


            // Eventlistner number 15
    obj2.petN.addEventListener('click',()=>{
          
        obj2.petN.textContent='5';
        obj2.petN.classList.add('numbCent')

        if (obj2.osa.textContent=='5'&& obj2.petN.textContent=='5') {
          
            setTimeout(()=>{
                obj2.osa.textContent=''
                obj2.petN.textContent=''
                obj2.osa.style.display='none'
                obj2.petN.style.display='none'
                obj2.score2.innerHTML = obj2.broj++;
                obj2.score2.style.display='inline-flex'
               
                alert('you have a match :-)')

            },500)
        }else{
            setTimeout(()=>{
                obj2.petN.textContent=''
                 obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }

    
    })

        // Eventlistner number 16
        obj2.sesN.addEventListener('click',()=>{
            obj2.sesN.textContent='8'
            obj2.sesN.classList.add('numbCent')
                if (obj2.cet.textContent=='8'&& obj2.sesN.textContent=='8') {
    
            setTimeout(()=>{
                obj2.cet.textContent=''
                obj2.sesN.textContent=''
                obj2.cet.style.display='none'
                obj2.sesN.style.display='none'
                obj2.score2.innerHTML = obj2.broj++;
                obj2.score2.style.display='inline-flex'
                
                 alert('you have a match :-)')
               
            },500)
        }else{
            setTimeout(()=>{
                obj2.sesN.textContent=''
                obj2.truys.style.display='inline-flex';
                obj2.truys.textContent=obj2.pokusaj++;
        
            },1500)
        }
        
        })
    

    

    

    

    

    


    


