# Word Frequency Histogram

This is a React application that fetches a text file and generates a histogram of the top 20 most frequent words in the file. It also includes an export button that allows the user to download the data as a CSV file.

The code uses the following libraries and plugins:

React: A JavaScript library for building user interfaces.
useState: A React hook for managing state.
Chart.js: A JavaScript library for creating charts and graphs.
Chart.js/auto: A Chart.js plugin that automatically installs all required chart types and components.
fetch: A JavaScript method for making HTTP requests.
Blob: A JavaScript class for handling raw data as binary objects.
URL: A JavaScript API for creating and manipulating URLs.
document: A JavaScript object that represents the current HTML document.


breakdown of the main parts of the code:-

const [data, setData] = useState(null); :    a state hook that sets data's initial value to zero. The top 20 most often occurring terms and their counts will be kept in this condition.

const handleSubmit = async () => {...}:An asynchronous function that retrieves the text file and performs word frequency analysis on it, identifying the top 20 words by counting the number of words in the text, ranking the words by frequency, and breaking the text into words. After that, the obtained data is kept in the data state.


const handleExport = () => {...}: a function that downloads a CSV file from the data state and converts it.

const plotChart = () => {...}: a Chart.js script that displays a histogram of the top 20 most used words. If the data state is not null, then this method is invoked.



<button onClick={handleSubmit}>Submit</button>: A button that triggers the handleSubmit function when clicked.

{data && (...)}: The following code is rendered conditionally and only if data is not null.

<canvas id="chart" width="400" height="200" ref={plotChart} />:a canvas element that makes use of Chart.js to render the histogram. When the component mounts, the plotChart function is called using the ref attribute.


<button onClick={handleExport}>Export</button>: A button that triggers the handleExport function when clicked.










## Getting Started

To get started with the application, you will need to have Node.js and NPM installed on your machine. Once you have these installed, follow these steps:

1. Clone the repository to your local machine.
2. In the project directory, run `npm install` to install the required dependencies.
3. Run `npm start` to start the application.
4. Open `http://localhost:3000` in your web browser.

## Usage

Simply click the "Submit" button to start the application and have it fetch and analyse the text file. A histogram of the top 20 most used words will be shown after the analysis is finished, along with an export button. When the export button is clicked, the data is downloaded as a CSV file.

## Libraries and Plugins

The following libraries and plugins are used in the application:

- React
- Chart.js
- Chart.js/auto

