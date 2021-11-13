// Generate uniqueId with random numbers + alphabets

const uniqueId = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);
  return head + tail;
};

const id1 = uniqueId();
console.log(id1);
