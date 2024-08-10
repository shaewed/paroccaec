// Define a function called addScale
function addScale(name, params) {
    // Check if the name is provided
    if (!name) {
        console.error("Scale name is required.");
        return;
    }

    // Check if params is an object
    if (typeof params !== 'object') {
        console.error("Params should be an object.");
        return;
    }

    // Perform operations using the name and params
    console.log("Adding scale:", name);
    console.log("With parameters:", params);
    // ... (perform additional operations based on name and params)
}

// Example usage of addScale function
let scaleName = "myScale";
let scaleParams = {
    min: 0,
    max: 100,
    unit: "cm"
};

addScale(scaleName, scaleParams);
