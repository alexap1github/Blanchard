window.addEventListener('DOMContentLoaded', function () {
                document.querySelector('.touch-beautiful__alignment').addEventListener('click', function(){
                    document.querySelector('.header__search-input').classList.remove('search__search-input--revealed')    
                    document.querySelector('.header__search-label').classList.remove('header__search-label--revealed')                       
                    document.querySelector('.header__search-form-mobile').classList.remove('header__search-form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.remove('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.remove('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.remove('header__search-form-close-activ')
                    document.querySelector('.header__search-form').classList.remove('header__search-form--activ')  
                    document.querySelector('.header__blanchard-link').classList.remove('header__blanchard-link--compensation')        
                })
                document.querySelector('.search__realizm').addEventListener('click', function(){
                    document.querySelector('.search__menu-realizm').classList.toggle('realizm__is-activ')
                    document.querySelector('.search__menu-impressianizm').classList.remove('impressianizm__is-activ')
                    document.querySelector('.search__menu-postimpressianizm').classList.remove('postimpressianizm__is-activ')
                    document.querySelector('.search__menu-avangard').classList.remove('avangard__is-activ')
                    document.querySelector('.search__menu-futurism').classList.remove('futurism__is-activ')
                    document.querySelector('.search__realizm').classList.toggle('search__realizm-activ')
                })
                document.querySelector('.search__impressianizm').addEventListener('click', function(){
                    document.querySelector('.search__menu-realizm').classList.remove('realizm__is-activ')
                    document.querySelector('.search__menu-impressianizm').classList.toggle('impressianizm__is-activ')
                    document.querySelector('.search__menu-postimpressianizm').classList.remove('postimpressianizm__is-activ')
                    document.querySelector('.search__menu-avangard').classList.remove('avangard__is-activ')
                    document.querySelector('.search__menu-futurism').classList.remove('futurism__is-activ')
                    document.querySelector('.search__impressianizm').classList.toggle('search__impressianizm-activ')
                })
                document.querySelector('.search__postimpressianizm').addEventListener('click', function(){
                    document.querySelector('.search__menu-realizm').classList.remove('realizm__is-activ')
                    document.querySelector('.search__menu-impressianizm').classList.remove('impressianizm__is-activ')
                    document.querySelector('.search__menu-postimpressianizm').classList.toggle('postimpressianizm__is-activ')
                    document.querySelector('.search__menu-avangard').classList.remove('avangard__is-activ')
                    document.querySelector('.search__menu-futurism').classList.remove('futurism__is-activ')
                    document.querySelector('.search__postimpressianizm').classList.toggle('search__postimpressianizm-activ')
                })
                document.querySelector('.search__avangard').addEventListener('click', function(){
                    document.querySelector('.search__menu-realizm').classList.remove('realizm__is-activ')
                    document.querySelector('.search__menu-impressianizm').classList.remove('impressianizm__is-activ')
                    document.querySelector('.search__menu-postimpressianizm').classList.remove('postimpressianizm__is-activ')
                    document.querySelector('.search__menu-avangard').classList.toggle('avangard__is-activ')
                    document.querySelector('.search__menu-futurism').classList.remove('futurism__is-activ')
                    document.querySelector('.search__avangard').classList.toggle('search__avangard-activ')
                })
                document.querySelector('.search__futurism').addEventListener('click', function(){
                    document.querySelector('.search__menu-realizm').classList.remove('realizm__is-activ')
                    document.querySelector('.search__menu-impressianizm').classList.remove('impressianizm__is-activ')
                    document.querySelector('.search__menu-postimpressianizm').classList.remove('postimpressianizm__is-activ')
                    document.querySelector('.search__menu-avangard').classList.remove('avangard__is-activ')
                    document.querySelector('.search__menu-futurism').classList.toggle('futurism__is-activ')
                    document.querySelector('.search__futurism').classList.toggle('search__futurism-activ')
                })
                
                document.querySelector('.slide1-img1').addEventListener('click', function(){
                    document.querySelector('.slaider1-img1-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slide1-img2').addEventListener('click', function(){
                    document.querySelector('.slaider1-img2-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slide1-img3').addEventListener('click', function(){
                    document.querySelector('.slaider1-img3-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slide1-img4').addEventListener('click', function(){
                    document.querySelector('.slaider1-img4-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slide1-img5').addEventListener('click', function(){
                    document.querySelector('.slaider1-img5-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slide1-img6').addEventListener('click', function(){
                    document.querySelector('.slaider1-img6-popap').classList.add('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img1-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img1-popap').classList.remove('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img2-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img2-popap').classList.remove('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img3-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img3-popap').classList.remove('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img4-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img4-popap').classList.remove('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img5-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img5-popap').classList.remove('slider1-img__is-activ')
                })
                document.querySelector('.slider1-img6-close').addEventListener('click', function(){
                    document.querySelector('.slaider1-img6-popap').classList.remove('slider1-img__is-activ')
                })
/*                 document.querySelector('.search__realizm').addEventListener('click', function(){

                   document.querySelector('.search__realizm-activ').addEventListener('click', function(){
                        document.querySelector('.realizm').classList.toggle('search__realizm-visited')
                    })  
                })*/
/*                document.querySelector('.search__impressianizm').addEventListener('click', function(){

                    document.querySelector('.search__impressianizm-activ').addEventListener('click', function(){
                        document.querySelector('.impressianizm').classList.toggle('search__impressianizm-visited')
                    })  
                })*/
/*                 document.querySelector('.search__postimpressianizm').addEventListener('click', function(){

                   document.querySelector('.search__postimpressianizm-activ').addEventListener('click', function(){
                        document.querySelector('.postimpressianizm').classList.toggle('search__postimpressianizm-visited')
                    })  
                })*/
/*                document.querySelector('.search__avangard').addEventListener('click', function(){

                    document.querySelector('.search__avangard-activ').addEventListener('click', function(){
                        document.querySelector('.avangard').classList.toggle('search__avangard-visited')
                    })  
                })*/
/*                 document.querySelector('.search__futurism').addEventListener('click', function(){

                   document.querySelector('.search__futurism-activ').addEventListener('click', function(){
                        document.querySelector('.futurism').classList.toggle('search__futurism-visited')
                    })  
                })*/


                document.querySelector('#burger').addEventListener('click', function(){
                    document.querySelector('.nav').classList.toggle('nav__is-activ')
                    document.querySelector('.header__burger-btn').classList.toggle('burger__is-activ')
                    document.querySelector('.nav__enter-link').classList.toggle('nav__enter-link-activ')                    
                })
                document.querySelector('.header__search-label').addEventListener('click', function(){
                    document.querySelector('.header__search-form').classList.toggle('header__search-form--activ')
                    document.querySelector('.header__blanchard-link').classList.toggle('header__blanchard-link--compensation')
                                 
                })
                               
                document.querySelector('.header__search-label').addEventListener('click', function(){
                    document.querySelector('.header__search-background').classList.add('header__search-background--revealed') 
                    document.querySelector('.header__search-input').classList.add('search__search-input--revealed')  
                    document.querySelector('.header__search-label').classList.add('header__search-label--revealed')  
                    document.querySelector('.header__search-form-mobile').classList.add('search_form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.add('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.add('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.add('header__search-form-close-activ')
                })
                document.querySelector('.header__search-form-close').addEventListener('click', function(){
                    document.querySelector('.header__search-background').classList.remove('header__search-background--revealed') 
                    document.querySelector('.header__search-input').classList.remove('search__search-input--revealed')  
                    document.querySelector('.header__search-label').classList.remove('header__search-label--revealed')  
                    document.querySelector('.header__search-form-mobile').classList.remove('search_form-mobile-revealed')
                    document.querySelector('.header__burger-btn').classList.remove('header__withdraw')
                    document.querySelector('.header__blanchard-link').classList.remove('header__withdraw')
                    document.querySelector('.header__search-form-close').classList.remove('header__search-form-close-activ')
                    document.querySelector('.header__blanchard-link').classList.remove('header__blanchard-link--compensation')
                })
                document.querySelector('.accord1-painter1').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter1-description1').classList.toggle('visible') 
                })               
                document.querySelector('.accord1-painter2').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter2-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter3').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter3-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter4').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter4-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter5').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter5-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter6').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter6-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter7').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter7-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter8').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter8-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter9').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter2-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter10').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter10-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter11').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter11-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter12').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter12-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter13').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter13-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter14').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter14-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter15').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter15-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter16').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter16-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter17').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter17-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter18').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter18-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter19').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter19-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter20').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter20-description1').classList.toggle('visible') 
                })
                document.querySelector('.accord1-painter21').addEventListener('click', function(){
                    document.querySelector('.visible').classList.remove('visible') 
                    document.querySelector('.painter21-description1').classList.toggle('visible') 
                })
                
                document.querySelectorAll(".search__item-link").forEach(item => {
                    item.addEventListener("click", function() {
                      let btn = this;
                      let dropdown = this.parentElement.querySelector(".search__menu-list");
                      
                      document.querySelectorAll(".search__item-link").forEach(el => {
                        if (el != btn) {
                          el.classList.remove("active--btn");
                        }
                      });
                      
                      document.querySelectorAll(".search__menu-list").forEach(el => {
                        if (el != dropdown) {
                          el.classList.remove("active-list--item");
                        }
                      })
                      dropdown.classList.toggle("active-list--item");
                      btn.classList.toggle("active--btn")
                    })
                  })
                  
                  document.addEventListener("click", function(e) {
                    let target = e.target;
                    if (!target.closest(".search__list")) {
                      document.querySelectorAll(".search__menu-list").forEach(el => {
                          el.classList.remove("search__item-link");
                      })
                       document.querySelectorAll(".search__item-link").forEach(el => {
                          el.classList.remove("active--btn");
                      });
                    }
                  })


})
