let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

  let sum = (Number);
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum);