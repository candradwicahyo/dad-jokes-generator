window.onload = () => {
  
  async function getData() {
    const data = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: "application/json"
      }
    });
    
    const newData = await data.json();
    const result = await newData.joke;
    
    const text = document.querySelector('.text');
    text.textContent = result;
  }
  
  getData();
  
  // button
  const button = document.querySelector('.btn-generate');
  button.addEventListener('click', getData);
  
}