// script.js
document.getElementById('analyze-button').addEventListener('click', function() {
    displayImages();
});

// Function to display images and captions
function displayImages() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

  const images = [
    { src: 'b1image2.png', caption: 'Last 3 months of the year records high number of transactions as compared to any other months with November as highest number of transactions' },
    { src: 'b1image3.png', caption: 'Thursdays are generally busier days for you' },
    { src: 'b1image4.png', caption: 'On the basis of hour, constant sales have been observed between 10 to 15 hours with most in 12th' },
    { 
        src: 'b1image5.png', 
        caption: 'Customer retention typically decreases over time, with higher retention in the initial months, shown by the darker shades. Some cohorts exhibit stronger retention in later months (e.g., December 2010 with 50% in month 9). There are fluctuations in retention rates, possibly due to external factors, changes in offerings, or seasonality.' 
    },
    { src: 'b1image6.png', caption: 'Caption for Image 6Most customers have interacted recently, with a peak density around very low recency values (close to 0).The recency density declines as the number of days increases, showing fewer customers with longer periods since their last interaction.There is a small uptick at higher recency values, possibly indicating a few older customers who havenot interacted in a long time.' },
    { src: 'b1image7.png', caption: 'Caption for Image 7' }, 
    { src: 'b1image8.png', caption: 'Caption for Image 8' }, 
    { src: 'b1image9.png', caption: 'Most of your sales (or customer activities) are close to a central point, meaning there are consistent patterns with only a few unusual cases.' },
    { src: 'b1image10.png', caption: 'Customers have different levels of recent activity, with some coming back very often, some regularly, and others less frequently. The chart shows clusters, which means you have groups of customers with similar visit or purchase patterns.' },
    
    { src: 'b1image12.png'},
    { src: 'b1image13.png' },
    { src: 'b1image14.png', caption: 'Silhouette analysis is used to measure how well data points in a dataset are grouped together when clustered, or grouped, into segments. It helps you understand whether the clusters formed are distinct and meaningful.' },
    
];


    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.caption;
        imgElement.classList.add('image-item');

        imgElement.addEventListener('click', function() {
            openModal(image.src);
        });

        const captionElement = document.createElement('p');
        captionElement.textContent = image.caption;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('image-item');
        itemDiv.appendChild(imgElement);
        itemDiv.appendChild(captionElement);

        imageContainer.appendChild(itemDiv);
    });

    resultsDiv.appendChild(imageContainer);
}

// Function to open the modal and display the image
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `<img src="${imageSrc}" style="width: 100%; height: auto;">`;
    modal.style.display = "block";

    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}