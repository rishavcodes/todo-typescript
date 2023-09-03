const dummyApi = {
    // Simulated API endpoint to fetch task data
    fetchTasks: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulated response with dummy task data
          const dummyData = [
            {
              id: 1,
              text: 'Buy groceries',
              priority: 'medium',
              isComplete: false,
            },
            {
              id: 2,
              text: 'Walk the dog',
              priority: 'low',
              isComplete: false,
            },
            {
              id: 3,
              text: 'Eat food',
              priority: 'high',
              isComplete: false,
            },
            {
              id: 4,
              text: 'Take Medicine',
              priority: 'high',
              isComplete: false,
            },
            {
              id: 5,
              text: 'Attend Class',
              priority: 'medium',
              isComplete: false,
            },
          ];
  
          resolve(dummyData);
        }, 1000); // Simulate a 1-second delay for API response
      });
    },
  };
  
  export default dummyApi;
  