function getShippingCost(country) {
  switch (country) {
    case "China":
      return `Shipping to ${country} will cost 100 credits`;
    case "Chile":
      return `Shipping to ${country} will cost 250 credits`;
    case "Australia":
      return `Shipping to ${country} will cost 170 credits`;
    case "Jamaica":
      return `Shipping to ${country} will cost 120 credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
