{console.log('--- --- missing opening bracket --- ---');

console.log('--- broken code ---')

  console.log(`
    let value = 0;

    while (value < 9) 
      value++;
    };

    console.assert(value === 9, 'nopes');
  `)

console.log('--- the error ---')

  console.log(`
    unknown: Unexpected token (17:4)
      15 |     while (value < 9) 
      16 |       value++;
    > 17 |     };
        |     ^
      18 | 
      19 |     console.assert(value === 9, 'nopes');
  `)

console.log('--- the fix ---')

  console.log(`
    let value = 0;

    while (value < 9) {
      value++;
    };

    console.assert(value === 9, 'nopes');
  `)
  console.log('there was a missing opening bracket after the condition check')
}