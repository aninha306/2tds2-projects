//Categoria possui vários produtos = 1:N
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

//Produto pertence a uma categoria = 1:1
class Products {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 0;
    }

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category);
    }
}

class ProductService {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(name, price, category) {
        const id = this.nextProductId++;
        const product = new Products(id, name, price, category);
        category.products.push(product);
        this.products.push(product);
    }
}

const categoryList = new CategoryService();
const productList = new ProductService();

function createCategory() {
    const categoryName = document.getElementById("categoryName").value;
    console.log(categoryName);

    categoryList.addCategory(categoryName);

    console.log(categoryList.categories);
    
   clearFormFields();

}

function createProduct() {
    const productName = document.getElementById("productName").value;
    const productPrice = 20;
    const productCategory = categoryList.categories[0];

    productList.addProduct(productName, productPrice, productCategory);

   console.log(productList.products);

}

function clearFormFields(){
    document.getElementById("categoryName").value = "";
    document.getElementById("productProduct").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}