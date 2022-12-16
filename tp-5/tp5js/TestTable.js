
import { TableException } from './Exception.js';


class TestTable {
    constructor(v1) {
        this.a=v1; 
    }  

testTable(){
        if (this.a.length == 0) {
          throw new TableException();
        }
        else if (!this.a.length == 0) {
          for (let i = 0; i < this.a.length; i++) {
            if (typeof this.a[i] === 'string') { 
              throw new TableException();
            }
          }
        } 
      }
    }

    export { TestTable }