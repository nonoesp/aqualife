export default class Cart {
    

      constructor(product_id) {
        this.product_id = product_id;
        this.quantity = 0;
      }
      
      checkCart(){
          this.cartArr = [];
          if(localStorage.getItem('cart') != null)
          {
              this.cartArr = JSON.parse(localStorage.getItem('cart'));
          }
        
         this.index = this.cartArr.findIndex(item => {
                  return (item.product_id == this.product_id)
                })
                
            if(this.index == -1)
            {
                this.index = this.cartArr.push(this) - 1;
            }
         this.quantity = this.cartArr[this.index].quantity;

  
      }
      
      addTocart(){
         
           this.checkCart();
           this.quantity++;
           this.saveCart(false);
      }
      
      decFromCart()
      {
          this.checkCart();
          var is_deleted = false;
          if(this.quantity > 1)
          {
              this.quantity--;
          }
          else{
              this.removeCart();
              is_deleted= true;
          }
          this.saveCart(is_deleted);
          
      }
      
      removeCart()
      {
        //   this.cartArr.splice(this.index,items-1);
        console.log(this.index)
         this.cartArr.splice(this.index, 1);
        //   this.finds.splice(this.index, 1);
                 
      }
      removeFromCart()
      {
          this.checkCart();
          this.removeCart();
          this.saveCart(true);
      }
      

      getData()
      {
          return this;
      }
      
      saveCart(is_deleted)
      {
           
        // console.log(this.quantity);
        // console.log(this.index);
       
          if(this.cartArr[this.index] && !is_deleted)
          {
              this.cartArr[this.index].quantity = this.quantity;
          }
          
          
          const getCircularReplacer = () => {
              const seen = new WeakSet();
              return (key, value) => {
                if (typeof value === "object" && value !== null) {
                  if (seen.has(value)) {
                    return;
                  }
                  seen.add(value);
                }
                return value;
              };
            };
    
    //  console.log(this.cartArr);
        
          localStorage.setItem("cart", JSON.stringify(this.cartArr, getCircularReplacer()));

         }
    
    }
    
    
    