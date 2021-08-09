class Photos {
  
 async photodata() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = response.json();
  return data;
  }
}
export default Photos;