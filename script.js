
const form = document.getElementById("decision-tree-form");
const recommendationOutput = document.getElementById("recommendation-output");
const beachVideo = document.getElementById("beach-video");
const mountainVideo = document.getElementById("mountain-video");
const backgroundVideo = document.getElementById("background-video");
const resetButton = document.getElementById("resetbutton");


backgroundVideo.style.display = "block";
beachVideo.style.display = "none";
mountainVideo.style.display = "none";
backgroundVideo.play();
beachVideo.pause();
mountainVideo.pause();


form.addEventListener("submit", (e) => {
  e.preventDefault(); 

 
  const preference = document.getElementById("preference").value;
  const activity = document.getElementById("activity").value;
  const budget = document.getElementById("budget").value;

  
  const recommendation = generateRecommendation(preference, activity, budget);

 
  recommendationOutput.innerHTML = `
    <h3>Your Personalized Recommendation:</h3>
    <p>${recommendation}</p>
  `;

  recommendationOutput.classList.add("fade-in");
  setTimeout(() => recommendationOutput.classList.remove("fade-in"), 1500);

 
  playVideo(preference);
});

function playVideo(preference) {
    
    
   if (preference === "Beach") {
    
    backgroundVideo.style.display = "none";
    beachVideo.style.display = "block";
    mountainVideo.style.display = "none";
    beachVideo.play();
    mountainVideo.pause();
    backgroundVideo.pause();
  } else if (preference === "Mountains") {
    
    backgroundVideo.style.display = "none";
    mountainVideo.style.display = "block";
    beachVideo.style.display = "none";
    mountainVideo.play();
    beachVideo.pause();
    backgroundVideo.pause();
  } 
  

}
resetButton.addEventListener("click", () => {
    window.open ("https://www.makemytrip.com","_blank");
  });



function generateRecommendation(preference, activity, budget) {
  let recommendation = "";

  if (preference === "Beach" && activity === "Adventure" && budget === "Low") {
    recommendation = "Explore the rugged coastline of Portugal's Algarve region! Enjoy surfing, cliff diving, and hiking along scenic trails. Stay in budget-friendly hostels and savor local seafood.";
  } else if (preference === "Beach" && activity === "Adventure" && budget === "Medium") {
    recommendation = "Embark on an adventurous journey to Costa Rica's Pacific coast! Explore pristine beaches, take on thrilling water sports like surfing and jet-skiing, and discover hidden waterfalls in the lush rainforest. With a medium budget, you can enjoy beachfront accommodations and guided tours to volcanic hot springs.";
  } else if (preference === "Beach" && activity === "Adventure" && budget === "High") {
    recommendation = "Experience the ultimate beach adventure in Hawaii! Go snorkeling with sea turtles, take helicopter tours over volcanoes, and try out surfing on the famous North Shore. Stay in luxurious beachfront resorts and enjoy fine dining.";
  } else if (preference === "Beach" && activity === "Relaxation" && budget === "Low") {
    recommendation = "Relax on the serene beaches of Thailand's Koh Lanta! Enjoy budget-friendly bungalows, beach massages, and tranquil sunsets. Explore local markets and savor delicious Thai cuisine.";
  } else if (preference === "Beach" && activity === "Relaxation" && budget === "Medium") {
    recommendation = "Unwind on the beautiful beaches of Bali! Stay in mid-range resorts, indulge in spa treatments, and enjoy yoga sessions by the sea. Explore cultural sites and enjoy fresh seafood at beachside restaurants.";
  } else if (preference === "Beach" && activity === "Relaxation" && budget === "High") {
    recommendation = "Pamper yourself in the Maldives! Stay in overwater villas with crystal-clear lagoon views, indulge in spa treatments, and savor gourmet dining on private beaches. The serene environment and luxury services make it the perfect escape for tranquility.";
  } else if (preference === "Mountains" && activity === "Adventure" && budget === "Low") {
    recommendation = "Plan a budget-friendly adventure to the Himalayas! Go trekking in Nepal's Annapurna Circuit, experience the thrill of camping under the stars, and visit remote mountain villages for an authentic cultural experience. It's an adventure that won't break the bank.";
  } else if (preference === "Mountains" && activity === "Adventure" && budget === "Medium") {
    recommendation = "Explore the Canadian Rockies! Go hiking, mountain biking, and kayaking in Banff National Park. Stay in cozy lodges and enjoy guided tours to glaciers and hot springs.";
  } else if (preference === "Mountains" && activity === "Adventure" && budget === "High") {
    recommendation = "Experience the thrill of the Swiss Alps! Go skiing, snowboarding, and paragliding in Zermatt. Stay in luxurious mountain resorts and enjoy gourmet Swiss cuisine.";
  } else if (preference === "Mountains" && activity === "Relaxation" && budget === "Low") {
    recommendation = "Relax in the peaceful mountains of the Blue Ridge Parkway in the USA! Stay in budget-friendly cabins, enjoy scenic drives, and explore charming small towns. Take leisurely hikes and enjoy picnics with mountain views.";
  } else if (preference === "Mountains" && activity === "Relaxation" && budget === "Medium") {
    recommendation = "Unwind in the Austrian Alps! Stay in mid-range mountain lodges, enjoy spa treatments, and take scenic cable car rides. Explore picturesque villages and savor traditional Austrian cuisine.";
  } else if (preference === "Mountains" && activity === "Relaxation" && budget === "High") {
    recommendation = "Relax in the Swiss Alps! Stay in a luxurious mountain resort, enjoy spa treatments with stunning alpine views, and savor gourmet Swiss cuisine. The serene environment and high-end amenities make it the perfect place to unwind.";
  } else {
    recommendation = "Please select valid options for all fields to get a recommendation.";
  }

  return recommendation;
}