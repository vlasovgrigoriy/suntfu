// Example code scenario
var modified = false;

function processEvent() {
    // Some condition where #modified becomes true
    if (someCondition) {
        modified = true;
    }
    
    // After becoming true, there should be a mechanism to set it back if needed
    // However, if this mechanism is missing or not correctly implemented:
    // modified = false; // This line might be missing or not reachable
}

// Later in the code or in another function
function checkModified() {
    if (modified) {
        console.log("#modified is true, action needed!");
    }
}
