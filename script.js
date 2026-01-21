const buttons = document.querySelectorAll(".main-timeframe");
const hoursElements = document.querySelectorAll(".side-hours");
const historyElements = document.querySelectorAll(".side-history");

let jsonData = [];

const updateCards = function (timeFrame) {
  const periodText = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  jsonData.forEach((item, index) => {
    const currentHours = item.timeframes[timeFrame].current;
    const previousHours = item.timeframes[timeFrame].previous;

    hoursElements[index].textContent =
      `${currentHours}${currentHours === 1 ? "hr" : "hrs"}`;
    historyElements[index].textContent =
      `${periodText[timeFrame]} - ${previousHours}${previousHours === 1 ? "hr" : "hrs"}`;
  });
};

const initApp = async () => {
  try {
    const response = await fetch("./data.json");

    if (!response.ok) {
      throw new Error("Failed to load data.");
    }

    const data = await response.json();
    jsonData = data;

    updateCards("weekly");
  } catch (error) {
    console.error("Error:", error);
  }
};
initApp();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    const clickedButton = e.currentTarget;
    clickedButton.classList.add("active");
    clickedButton.setAttribute("aria-pressed", "true");

    const timeFrame = clickedButton.dataset.type;
    updateCards(timeFrame);
  });
});
