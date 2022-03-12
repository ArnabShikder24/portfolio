// Portfolio Item Filters
const filterContainer = document.querySelector('.portfolio-filter'),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll('.portfolio-item'),
      totalPortfolioItem = portfolioItems.length;


      for(let i = 0; i < totalFilterBtn; i++) {
         filterBtns[i].addEventListener('click', function(){
            filterContainer.querySelector('.active').classList.remove('active')
            this.classList.add('active')


            const filterValue = this.getAttribute('data-filter')
            for(let j = 0; j < totalPortfolioItem; j++){
                if(filterValue === portfolioItems[j].getAttribute('data-category')){
                    portfolioItems[j].classList.remove('hide')
                    portfolioItems[j].classList.add('show')
                }else {
                    portfolioItems[j].classList.remove('show')
                    portfolioItems[j].classList.add('hide')
                }
                if(filterValue === 'all') {
                    portfolioItems[j].classList.remove('hide')
                    portfolioItems[j].classList.add('show')
                }
            }

         })
      }
      

    //   Portfolio Lightbox
    const lightbox = document.querySelector('.lightbox'),
          lightboxClose = lightbox.querySelector('.lightbox-close'),
          lightboxImg = lightbox.querySelector('.lightbox-img'),
          lightboxText = lightbox.querySelector('.caption-text'),
          lightboxCounter = lightbox.querySelector('.caption-counter');

    
        let itemIndex = 0
        for(let i = 0; i < totalPortfolioItem; i++) {
            portfolioItems[i].addEventListener('click', function(){
                itemIndex = i;
                changeItem();
                toggleLightbox();
            })
        }


        function prevItem() {
            if(itemIndex === 0) {
                itemIndex = totalPortfolioItem - 1
            }else {
                itemIndex--
            }
            changeItem()
        }
        function nextItem() {
            if(itemIndex === totalPortfolioItem - 1) {
                itemIndex = 0
            }else {
                itemIndex++
            }
            changeItem()
        }
        function toggleLightbox() {
            lightbox.classList.toggle('open');
        }
        
        function changeItem() {
            imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src')
            lightboxImg.src = imgSrc
            lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
            lightboxCounter.innerHTML = (itemIndex+1) + ' of ' + totalPortfolioItem;
        }


        // Close LightBox
        lightboxClose.addEventListener('click', function(event){
            if(event.target === lightboxClose) {
                toggleLightbox();
            }
        })
        