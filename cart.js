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
           this.saveCart();
      }
      
      decFromCart()
      {
          this.checkCart();
          if(this.quantity > 1)
          {
              this.quantity--;
          }
          else{
              this.removeCart();
          }
          this.saveCart();
          
      }
      
      removeCart()
      {
        //   this.cartArr.splice(this.index,items-1);
         this.cartArr.splice(this.index, 1);
        //   this.finds.splice(this.index, 1);
                 
      }
      removeFromCart()
      {
          this.checkCart();
          this.removeCart();
          this.saveCart();
      }
      

      getData()
      {
          return this;
      }
      
      saveCart()
      {
           
          if(this.cartArr[this.index])
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
    
    // console.log(this.cartArr);
        
          localStorage.setItem("cart", JSON.stringify(this.cartArr, getCircularReplacer()));

         }
    
    }
    
    
    