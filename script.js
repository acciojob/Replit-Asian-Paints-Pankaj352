document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");
    
    // Create the 3x3 grid
    for (let i = 1; i <= 9; i++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.id = `grid-item-${i}`;
        gridItem.textContent = i;
        gridContainer.appendChild(gridItem);
    }

    const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");
    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");

    changeButton.addEventListener("click", () => {
        // Reset all grid item colors to transparent
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.backgroundColor = "transparent";
        });
        
        let blockId = blockInput.value;
        let color = colorInput.value;
        let selectedBlock = document.getElementById(`grid-item-${blockId}`);
        
        if (selectedBlock) {
            selectedBlock.style.backgroundColor = color;
        }
    });
    
    resetButton.addEventListener("click", () => {
        document.querySelectorAll(".grid-item").forEach(item => {
            item.style.backgroundColor = "transparent";
        });
    });
});