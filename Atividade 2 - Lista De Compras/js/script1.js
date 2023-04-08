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
       this.denyProduct()
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

            td_id.classList.add('center')
            td_productAction.classList.add('center')

            const imgDelete = document.createElement('img')
            imgDelete.src = 'img/botao-apagar.png'
            imgDelete.setAttribute("onClick", `product.delete(${this.arrayProduct[i].productID})`)

            td_productAction.appendChild(imgDelete)
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
        document.getElementById('Product').value = ''
        document.getElementById('Price').value = ''
        document.getElementById('Qntt').value = ''
    }

    delete(id) {
        if(confirm(`Você realmente deseja deletar o produco do ID ${id}?`) == true){
            let tbody = document.getElementById('tbody')

            for(let i = 0; i < this.arrayProduct.length; i++){
                if(this.arrayProduct[i].productID == id) {
                    this.arrayProduct.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }

    clearList() {
        if(confirm('Você realmente deseja limpar a sua lista?') == true) {
            let tbody = document.getElementById('tbody')
            tbody.innerHTML = ''
    
            this.id = 1
            this.arrayProduct = []
            console.log(this.arrayProduct)   
        }
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