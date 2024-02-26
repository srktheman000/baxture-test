const getUserList = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.log('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

export default getUserList;
