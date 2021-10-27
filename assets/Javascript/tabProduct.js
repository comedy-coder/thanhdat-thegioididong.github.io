
// sale prodcut

var productSale = document.querySelector('.container__full--product-app')

var salePrev = document.querySelector('.product-prev')

function salePrevLeft() {
    productSale.classList.toggle('sale-prev')
}

salePrev.addEventListener('click', salePrevLeft)


var saleNext = document.querySelector('.product-next')

function saleNextLeft() {
    productSale.classList.toggle('sale-prev')
}

saleNext.addEventListener('click', saleNextLeft)

setInterval(function () {
    saleNextLeft()
}, 3500)

// LAPTOP, TABLET NỔI BẬT NHẤT  

var highlights = document.querySelector('.product__most--all')

var prevHighlights = document.querySelector('.prev-highlights')

function prevHighlightsLeft() {
    highlights.classList.toggle('highlights-transform')
}

prevHighlights.addEventListener('click', prevHighlightsLeft)


var nextHighlights = document.querySelector('.next-highlights')

function nextHighlightsRight() {
    highlights.classList.toggle('highlights-transform')
}

nextHighlights.addEventListener('click', nextHighlightsRight)

setInterval(function () {
    nextHighlightsRight()
}, 4500)


// Phụ kiện nổi bật nhất 

var highlightsItem = document.querySelector('.product__most--all-fixx')

var prevHighlightsLink = document.querySelector('.prev-highlights-item')


function prevHighlightsSetup() {
    highlightsItem.classList.toggle('highlights-transform')
}

prevHighlightsLink.addEventListener('click', prevHighlightsSetup)


var nextHighlightsLink = document.querySelector('.next-highlights-item')

function nextHighlightsItem() {
    highlightsItem.classList.toggle('highlights-transform')
}

nextHighlightsLink.addEventListener('click', nextHighlightsItem)

setInterval(function () {
    nextHighlightsItem()
}, 6000)


// tab tab tab

var tabsItem = document.querySelectorAll('.clock-dongho-tap')

var tabsProducts = document.querySelectorAll('.clock-watch-full')

tabsItem.forEach(function (tab, index) {

    var tabsProduct = tabsProducts[index]

    tab.onclick = function () {

        document.querySelector('.clock-dongho-tap.clock-active').classList.remove('clock-active')
        document.querySelector('.clock-watch-full.watch-active').classList.remove('watch-active')

        this.classList.add('clock-active')
        tabsProduct.classList.add('watch-active')
    }
})

//  Đồng hồ thông minh

var product = document.querySelector('.clock-watch-full')

var nextProductLeft = document.querySelector('.next-clock')

var prevProductRight = document.querySelector('.prev-clock')

function nextProduct() {

    product.classList.toggle('product-right')
}

nextProductLeft.addEventListener('click', nextProduct)


function prevProduct() {
    product.classList.toggle('product-right')
}

prevProductRight.addEventListener('click', prevProduct)

setInterval(function () {
    prevProduct()
}, 5000)



// Đồng hồ thời trang nam 

var productTwo = document.querySelector('.clock-watch-full-two')

var nextProductLeft = document.querySelector('.next-clock-2')

var prevProductRight = document.querySelector('.prev-clock-2')

function nextProducttwo() {
    productTwo.classList.toggle('product-right')

}

nextProductLeft.addEventListener('click', nextProducttwo)


function prevProducttwo() {
    productTwo.classList.toggle('product-right')
}

prevProductRight.addEventListener('click', prevProducttwo)

setInterval(function () {
    nextProducttwo()
}, 5000)


// đồng hồ thời trang nữ clock-watch-full-three

var productThree = document.querySelector('.clock-watch-full-three')


var nextProductLeft = document.querySelector('.next-clock-3')

var prevProductRight = document.querySelector('.prev-clock-3')

function nextProductThree() {
    productThree.classList.toggle('product-right')

}

nextProductLeft.addEventListener('click', nextProductThree)


function prevProductThree() {
    productThree.classList.toggle('product-right')
}

prevProductRight.addEventListener('click', prevProductThree)

setInterval(function () {
    nextProductThree()
}, 5000)


//  Định vị trẻ em  clock-watch-full-four

var productFour = document.querySelector('.clock-watch-full-four')


var nextProductLeft = document.querySelector('.next-clock-4')

var prevProductRight = document.querySelector('.prev-clock-4')

function nextProductFour() {
    productFour.classList.toggle('product-right')

}

nextProductLeft.addEventListener('click', nextProductFour)


function prevProductFour() {
    productFour.classList.toggle('product-right')
}

prevProductRight.addEventListener('click', prevProductFour)

setInterval(function () {
    nextProductFour()
}, 5000)
