class PrintImg {
    constructor() {
        this._menuMobileOpen()
        this.containerGallery = document.querySelector('.content-gallery')
        this.dataUrl = document.querySelector('.content-gallery').getAttribute('data-url')
        this._initData()
        this._blocksView()
        this._searchOpen()
        this._selectsItem()
    }
    _menuMobileOpen() {
        let menuBtn = document.querySelector('header .content-menu-btn')
        let containerMenu = document.querySelector('header ul')
        let opacityMenu = document.querySelector('.opacity-menu-mobile')
        let body = document.querySelector('body')
        menuBtn.addEventListener('click', () => {
            if (!menuBtn.classList.contains('active')) {
                menuBtn.innerHTML =
                    `<svg version="1.1" id="Layer_1" fill="#fd5875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388
                                c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
                                l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
                                c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
                                />
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
               </svg>`

                menuBtn.classList.add('active')
                containerMenu.classList.add('active')
                opacityMenu.classList.add('active')
                body.classList.add('scroll-hidden')
            } else {

                menuBtn.innerHTML =
                    `<svg version="1.1" id="Capa_1" fill="#fd5875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
                        <g>
                        <g id="Menu_1_">
                            <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                                c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                            <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                                S379.58,180.455,372.939,180.455z"/>
                            <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                   c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                   <g></g><g></g>
            </svg>`
                menuBtn.classList.remove('active')
                containerMenu.classList.remove('active')
                opacityMenu.classList.remove('active')
                body.classList.remove('scroll-hidden')
            }
        })
        opacityMenu.addEventListener('click', () => {
            if (!opacityMenu.classList.contains('active')) {
                menuBtn.innerHTML =
                    `<svg version="1.1" id="Layer_1" fill="#fd5875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
                    <g>
                        <g>
                            <path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388
                                c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
                                l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
                                c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
                                />
                        </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
               </svg>`

                menuBtn.classList.add('active')
                containerMenu.classList.add('active')
                opacityMenu.classList.add('active')
                body.classList.add('scroll-hidden')
            } else {

                menuBtn.innerHTML =
                    `<svg version="1.1" id="Capa_1" fill="#fd5875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
                        <g>
                        <g id="Menu_1_">
                            <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                                c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                            <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                                S379.58,180.455,372.939,180.455z"/>
                            <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                   c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                   <g></g><g></g>
            </svg>`
                menuBtn.classList.remove('active')
                containerMenu.classList.remove('active')
                opacityMenu.classList.remove('active')
                body.classList.remove('scroll-hidden')
            }
        })
    }
    _initData() {
        let contentGallery = document.querySelector('.content-gallery');

        fetch('/scripts/data/data.json')
            .then(res => res.json())
            .then(res => {
                let arrayGroups = []; // Aquí almacenamos los nuevos arreglos
                // console.log("Arreglo original: ", res);
                const long = res.length / 3; // Partir en arreglo de 3
                for (let i = 0; i < res.length; i += long) {
                    let contentImg = res.slice(i, i + long);
                    arrayGroups.push(contentImg);
                }
                arrayGroups.forEach(array => {
                    contentGallery.innerHTML +=
                        `<div class="column-imgs">
                        ${array.map(img => 
                            (`<div class="content-img" data-category=${img.category}> 
                                <img src=${img.imageUrl}
                                    alt="">
                                <a href="javascript:void(0)" class="description">
                                    <h3>${img.title}</h3>
                                    <span>${img.description}</span>
                                </a>
                            </div>`)
                        ).join("")}    
                </div > `
                });
            })
    }

    _blocksView() {
        let btnsBlock = document.querySelectorAll('.config-blocks .block-view')
        btnsBlock.forEach(btn => {
            btn.addEventListener('click', () => {
                let contanerImg = document.querySelector('.content-gallery')
                if (btn.classList.contains('block')) {
                    contanerImg.classList.add('img-block')
                } else {
                    contanerImg.classList.remove('img-block')
                }
            })
        });
    }
    _searchOpen(){
        let iconSearch  = document.querySelector('header .search-icon')
        let search = document.querySelector('#search')
        let itemsMenu = document.querySelector('header ul')
        iconSearch.addEventListener('click',()=>{
            if(search.classList.contains('active')){
                search.classList.remove('active')
                itemsMenu.style.display="flex"
                iconSearch.innerHTML=
                `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                    <g>
                        <g>
                            <path fill="#ff5672"
                                d="M20.246 21.292l-5.035-5.036a9.064 9.064 0 0 1-6.113 2.368A9.107 9.107 0 0 1-.01 9.517 9.111 9.111 0 0 1 9.098.407c5.03.002 9.109 4.078 9.109 9.11 0 2.202-.781 4.22-2.08 5.794l5.05 5.05zM16.889 9.517a7.799 7.799 0 0 0-7.791-7.792 7.804 7.804 0 0 0-7.791 7.792 7.804 7.804 0 0 0 7.79 7.791 7.799 7.799 0 0 0 7.792-7.79z" />
                        </g>
                    </g>
                </svg>`
            }else{
                search.classList.add('active')
                itemsMenu.style.display="none"
                iconSearch.innerHTML=
                `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 455.111 455.111" style="enable-background:new 0 0 455.111 455.111;" xml:space="preserve">
                    <circle style="fill:#E24C4B;" cx="227.556" cy="227.556" r="227.556"/>
                    <path style="fill:#D1403F;" d="M455.111,227.556c0,125.156-102.4,227.556-227.556,227.556c-72.533,0-136.533-32.711-177.778-85.333
                        c38.4,31.289,88.178,49.778,142.222,49.778c125.156,0,227.556-102.4,227.556-227.556c0-54.044-18.489-103.822-49.778-142.222
                        C422.4,91.022,455.111,155.022,455.111,227.556z"/>
                    <path style="fill:#FFFFFF;" d="M331.378,331.378c-8.533,8.533-22.756,8.533-31.289,0l-72.533-72.533l-72.533,72.533
                        c-8.533,8.533-22.756,8.533-31.289,0c-8.533-8.533-8.533-22.756,0-31.289l72.533-72.533l-72.533-72.533
                        c-8.533-8.533-8.533-22.756,0-31.289c8.533-8.533,22.756-8.533,31.289,0l72.533,72.533l72.533-72.533
                        c8.533-8.533,22.756-8.533,31.289,0c8.533,8.533,8.533,22.756,0,31.289l-72.533,72.533l72.533,72.533
                        C339.911,308.622,339.911,322.844,331.378,331.378z"/><g></g><g>           </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                    </svg>`
                
            }
        })
    }

    _selectsItem(){
        let items = document.querySelectorAll('.items-select a')
        let widtPage=window.innerWidth
        items.forEach(itemsMenu => {
            itemsMenu.addEventListener('click',()=>{
                if(widtPage<768){
                    let containerMenu = document.querySelector('header ul')
                    let opacityMenu = document.querySelector('.opacity-menu-mobile')
                    let menuBtn = document.querySelector('header .content-menu-btn')
                    let body = document.querySelector('body')
                    menuBtn.classList.remove('active')
                    containerMenu.classList.remove('active')
                    opacityMenu.classList.remove('active')
                    body.classList.remove('scroll-hidden')
                    menuBtn.innerHTML =
                    `<svg version="1.1" id="Capa_1" fill="#fd5875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
                                <g>
                                <g id="Menu_1_">
                                    <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
                                        c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z"/>
                                    <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
                                        S379.58,180.455,372.939,180.455z"/>
                                    <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606
                        c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z"/></g><g></g><g></g><g></g><g></g><g></g><g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
                        <g></g><g></g>
                    </svg>`
                }

                 items.forEach(item => {
                     item.classList.remove('active')
                 });
                 itemsMenu.classList.add('active')
                let imgCategoryItem = itemsMenu.getAttribute('data-img')
                let imgs = document.querySelectorAll('.content-img')
                imgs.forEach(img => {
                    let categoryImg = img.getAttribute('data-category')
                    if(categoryImg===imgCategoryItem){
                        img.style.display="block"
                    }else if(imgCategoryItem!=="all"){
                        img.style.display="none"
                    }else{
                        img.style.display="block"
                    }
                });
            })
        });
    }

}

window.addEventListener("load", new PrintImg());