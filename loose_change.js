// Solution 1
function check(money, denomination) {
  let coins = 0;
  if (money >= denomination) {
    coins = parseInt(money / denomination);
  }
  return coins;
}

function looseChange(money) {
  let change = {};

  money = money * 100;

  change["2d"] = check(money, 200);
  money -= change["2d"] * 200;

  change["1d"] = check(money, 100);
  money -= change["1d"] * 100;

  change["50c"] = check(money, 50);
  money -= change["50c"] * 50;

  change["20c"] = check(money, 20);
  money -= change["20c"] * 20;

  change["10c"] = check(money, 10);
  money -= change["10c"] * 10;

  change["5c"] = check(money, 5);
  money -= change["5c"] * 5;

  if (money > 2) {
    change["5c"] += 1;
  }
  return change;
}

console.log(looseChange(0.23));
// {2d: 0, 1d: 0, 50c: 0, 20c: 1, 10c: 0, 5c: 1}
console.log(looseChange(1.31));
// {2d: 0, 1d: 1, 50c: 0, 20c: 1, 10c: 1, 5c: 0}
console.log(looseChange(10.92));
// { '2d': 5, '1d': 0, '50c': 1, '20c': 2, '10c': 0, '5c': 0 }

// June's Solution
function looseChangeJune(amount) {
  let map = { "2d": 0, "1d": 0, "50c": 0, "20c": 0, "10c": 0, "5c": 0 };

  amount = amount * 100;
  for (let key in map) {
    let coinValue = key.includes("d")
      ? Number(key[0] * 100)
      : Number(key.substring(0, key.length - 1));

    while (amount - coinValue >= 0) {
      map[key]++;
      amount -= coinValue;
    }
  }
  if (amount < 5 && amount > 2) map["5c"]++;
  return map;
}
console.log("--- June's Solution ---");
console.log(looseChangeJune(0.23));
console.log(looseChangeJune(1.31));
console.log(looseChangeJune(10.92));

// Nam's Solution
function looseChangeNam(amount) {
  amount = amount * 100;
  const coins = {
    "2d": 200,
    "1d": 100,
    "50c": 50,
    "20c": 20,
    "10c": 10,
    "5c": 5
  };
  const output = { "2d": 0, "1d": 0, "50c": 0, "20c": 0, "10c": 0, "5c": 0 };

  for (coinValue in coins) {
    if (amount / coins[coinValue] >= 1) {
      output[coinValue] = Math.floor(amount / coins[coinValue]);
      amount -= coins[coinValue] * output[coinValue];
    }
  }
  if (amount > 2) output["5c"] += 1;
  return output;
}

console.log("--- Nam's Solution ---");
console.log(looseChangeNam(0.23));
console.log(looseChangeNam(1.31));
console.log(looseChangeNam(10.92));

// Nick's Solution
function looseChangeNick(amount) {
  toCents = amount * 100;
  coinage = {
    "2d": 200,
    "1d": 100,
    "50c": 50,
    "20c": 20,
    "10c": 10,
    "5c": 5
  };

  for (let coin in coinage) {
    if (toCents / coinage[coin] >= 1) {
      let numCoins = Math.floor(toCents / coinage[coin]);
      toCents -= numCoins * coinage[coin];
      coinage[coin] = numCoins;
    } else {
      coinage[coin] = 0;
    }
  }
  if (toCents > 2) {
    coinage["5c"] += 1;
  }
  return coinage;
}

console.log("--- Nick's Solution ---");
console.log(looseChangeNick(0.23));
console.log(looseChangeNick(1.31));
console.log(looseChangeNick(10.92));
