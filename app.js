const averageResult = document.querySelector(".results-card__avg-result");
const resultsContainer = document.querySelector(".results-card__results-container");

fetch("data.json")
    .then(response => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
    })
    .then(renderResults)
    .catch(showError);

function renderResults(data) {
    let sum = 0;
    let markup = "";

    data.forEach(item => {
        const category = item.category.toLowerCase();
        sum += item.score;

        markup += `
            <div class="results-card__result-item results-card__result-item--${category}">
                <div class="results-card__category-group">
                    <figure class="results-card__icon">
                        <img src="./images/icon-${category}.svg" alt="${category}"
                             width="${item.width}" height="${item.height}">
                        <figcaption class="offscreen">${category}-icon</figcaption>
                    </figure>
                    <p class="results-card__result-category results-card__result-category--${category}">
                        ${item.category}
                    </p>
                </div>
                <div class="results-card__final-group">
                    <p class="results-card__final-numerator">${item.score}</p>
                    <p class="results-card__final-denominator">/ 100</p>
                </div>
            </div>
        `;
    });

    resultsContainer.innerHTML = markup;
    averageResult.textContent = Math.floor(sum / data.length);
}

function showError(error) {
    resultsContainer.textContent = `${error} ⚠️`;
    resultsContainer.classList.add("results-error")
}