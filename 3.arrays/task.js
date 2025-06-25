function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Массивы разной длины не могут быть одинаковыми
      }
    
      return arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    const filteredUsers = users.filter(user => user.gender === gender);

  if (filteredUsers.length === 0) {
    return 0; // Или другое значение по умолчанию, если нет пользователей данного пола
  }

  const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / filteredUsers.length;

  return averageAge;
}