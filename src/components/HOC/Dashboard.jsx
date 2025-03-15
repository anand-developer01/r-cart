import React, { useState, useEffect } from 'react';

// Custom hook to debounce search input
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const withAuth = (Wrappedcomponent, httpComp) => {
  return function (props) {
    const [apiData, setApiData] = useState([]);
    const debouncedSearchInput = useDebounce(props.searchInput, 300); // Debounce search input

    useEffect(() => {
      const callApi = async () => {
        try {
          const apiD = await httpComp();
          let filteredData = apiD;

          if (debouncedSearchInput) {
            filteredData = apiD.filter(f =>
              f.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())
            );
          }

          setApiData(filteredData);
        } catch (err) {
          console.log(err);
        }
      };

      callApi();
    }, [debouncedSearchInput]); // Only trigger effect when the debounced value changes

    return <Wrappedcomponent {...props} apiData={apiData} />;
  };
};

// Sample API fetch function
const httpComp = async () => {
  const apiRes = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await apiRes.json();
};

// Component to display API data
const showApiData = ({ apiData }) => {
  return (
    <div>
      {apiData.length ? (
        apiData.map((item) => <div key={item.id}>{item.title}</div>)
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

// Export the HOC with the showApiData component
export const ReturnHOCInputCom = withAuth(showApiData, httpComp);

