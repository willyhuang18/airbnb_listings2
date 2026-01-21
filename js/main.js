function MainModule(listingsID = "#listings") {
  const me = {};


  const listingsElement = document.querySelector(listingsID);

  function getListingCode(listing) {
    // Data Parsing - Cleaning the stringified array from the JSON.
    let amenitiesHTML = "";
    try {
      const amenitiesArray = JSON.parse(listing.amenities.replace(/'/g, '"'));
      amenitiesHTML = amenitiesArray.slice(0, 4)
        .map(item => `<span class="badge bg-light text-dark border me-1 mb-1">${item}</span>`)
        .join("");
    } catch (e) {
      amenitiesHTML = `<span>Standard amenities</span>`;
    }
    // Using availability_30 to trigger a sense of urgency.
    const scarcityBadge = listing.availability_30 < 10 ?
      `<div class="position-absolute top-0 end-0 m-2 badge bg-warning text-dark shadow-sm">
        ⏳ Only ${listing.availability_30} days left this month!
       </div>` : "";

    //Creating the final HTML structure with dynamic data.
    return `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="listing card h-100 shadow-sm border-0 position-relative">
          ${scarcityBadge}
          <img src="${listing.picture_url}" class="card-img-top" alt="${listing.name}" style="height: 200px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-truncate">${listing.name}</h5>
            <div class="d-flex align-items-center mb-2">
              <img src="${listing.host_thumbnail_url}" class="rounded-circle me-2" style="width:24px; height:24px;">
              <small class="text-muted">Host: ${listing.host_name}</small>
              <small class="text-secondary" style="font-size: 0.75rem;">
                ★ ${listing.number_of_reviews || 0} reviews
              </small>
            </div>
            <div class="mb-2 text-primary fw-bold">${listing.price} / night</div>
            <p class="card-text small text-secondary flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
              ${listing.description}
            </p>
            <div class="mt-2">
              <div class="d-flex flex-wrap">${amenitiesHTML}</div>
            </div>
            <a href="${listing.listing_url}" target="_blank" class="btn btn-outline-primary btn-sm mt-3 w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  }

  function redraw(listings) {
    if (!listingsElement) return;
    //Using .map() to process all listings and .join() to create one large string.
    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    try {
      // Waiting for the JSON file to be fetched.
      const res = await fetch("./airbnb_sf_listings_500.json");
      const listings = await res.json();

      me.redraw(listings.slice(0, 50));
    } catch (error) {
      console.error("Fetch Error:", error);
      listingsElement.innerHTML = `<div class="alert alert-danger">Error loading JSON.</div>`;
    }
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

// Starting the entire process.
const main = MainModule();


main.loadData();