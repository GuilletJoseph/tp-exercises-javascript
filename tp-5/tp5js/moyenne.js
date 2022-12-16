
import {arr} from './ajout.js';
import {TestTable} from './TestTable.js';

document.getElementById('moyenne').addEventListener('click', (event) => {
    moyenne()
  });

  function moyenne() {
    try {
      new TestTable(arr).testTable() ;
        var k = 0;
        for (let i = 0; i < arr.length; i++) {
            k = k + arr[i];
          }
          k = k / arr.length;
          document.getElementById('result').innerHTML = 'Le moyenne de tableau-' + k;
    } catch (e) {
      document.getElementById('result').innerHTML = e.message+' '+e.name;
    }

    
}

