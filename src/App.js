

import React, { useState } from 'react';
import Chart from 'chart.js/auto';


const App = () => {
  const [data, setData] = useState(null);

  const handleSubmit = async () => {
    const response = await fetch('https://www.terriblytinytales.com/test.txt');
    const text = await response.text();
    const words = text.split(/\W+/); // splitting the  text into words
    const freq = {};
    for (let word of words) {
      freq[word] = (freq[word] || 0) + 1; // counting  frequency of each word
    }
    const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]); // sorting by frequency
    const top20 = sorted.slice(0, 20); // get top 20 words
    const labels = top20.map(([word]) => word);
    const data = top20.map(([, count]) => count);
    setData({ labels, data });
  };

  const handleExport = () => {
    const csv = data.labels.reduce((acc, label, i) => {
      return acc + `"${label}",${data.data[i]}\n`;
    }, 'Word,Count\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'histogram.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const plotChart = () => {
    if (!data) return;
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.data,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Histogram of Word Frequency',
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Count',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Word',
            },
          },
        },
      },
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={handleSubmit} style={{backgroundColor:"orange",fontSize: '1.2em', width: '8em', alignSelf: 'center'}}>Submit</button>
      {data && (
        <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
          <canvas id="chart" width="800" height="400" ref={plotChart} />

          <button onClick={handleExport} style={{backgroundColor:"orange",fontSize: '1.2em', width: '8em', alignSelf: 'center'}}>Export</button>
        </div>
      )}
    </div>
  );
};

export default App;

