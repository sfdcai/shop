async function fetchWebsites() {
    const response = await fetch('websites.json');
    const data = await response.json();
    return data.websites;
  }
  
  async function fetchPrice(url, productName) {
    // This is a placeholder function. In a real-world scenario, you would need to implement
    // web scraping or use APIs provided by the websites to get the product prices.
    // For demonstration purposes, we'll return a random price.
    return Math.random() * 100;
  }
  
  async function findCheapestProduct() {
    const productName = document.getElementById('productName').value;
    const websites = await fetchWebsites();
    let cheapestPrice = Infinity;
    let cheapestWebsite = '';
  
    for (const website of websites) {
      const price = await fetchPrice(website, productName);
      if (price < cheapestPrice) {
        cheapestPrice = price;
        cheapestWebsite = website;
      }
    }
  
    document.getElementById('result').innerText = `The cheapest price for "${productName}" is $${cheapestPrice.toFixed(2)} on ${cheapestWebsite}`;
  }