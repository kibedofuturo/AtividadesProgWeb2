class Product {
    constructor() {
        this.id = 1
        this.arrayProduct = []
    }

    setProduct() {
       let product = this.inputData()
        
       if(this.checkFilds(product) == true) {
        this.add(product)
       }

       this.tableList()
    }

    add(product) {
        this.arrayProduct.push(product)
        this.id++
    }

    tableList() {
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = ''

        for(let i = 0; i < this.arrayProduct.length; i++) {
            let tr = tbody.insertRow()

            let td_id = tr.insertCell()
            let td_productName = tr.insertCell()
            let td_productPrice = tr.insertCell()
            let td_productQntt = tr.insertCell()
            let td_productAction = tr.insertCell()

            td_id.innerHTML = this.arrayProduct[i].productID
            td_productName.innerHTML = this.arrayProduct[i].productName
            td_productPrice.innerHTML = this.arrayProduct[i].productPrice
            td_productQntt.innerHTML = this.arrayProduct[i].productQntt
        }
    }

    inputData() {
        let product = {}

        product.productID = this.id
        product.productName = document.getElementById('Product').value
        product.productPrice = document.getElementById('Price').value
        product.productQntt = document.getElementById('Qntt').value

        return product
    }

    denyProduct() {
        alert('Vamos deletar um produto')
    }

    checkFilds(product) {
        let msg = ''

        if(product.productName == '') {
            msg += 'Informe o nome do produto \n'
        } 
        
        if(product.productPrice == '') {
            msg += 'Informe o preço do produto \n'
        } 
        
        if(product.productQntt == '') {
            msg += 'Informe a quantidade de produtos \n'
        }

        if(msg != ''){
            alert(msg)
            return false
        }
        
        return true
    }
}

const product = new Product()