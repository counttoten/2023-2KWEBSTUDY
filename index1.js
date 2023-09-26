const validateData = (data) => {
  if (!data) throw new Error(500);
  if (!data.length) throw new Error(404);
  return data;
};

const createMessage = (data) => {
  try {
    const checkedData = validateData(data);
    return `Success: ${checkedData}`;
  } catch (e) {
    return `Failed: ${e.message}`;
  } finally {
    console.log("createMessage done");
  }
};

console.log(createMessage());
console.log(createMessage([]));
console.log(createMessage([1, 2, 3]));
