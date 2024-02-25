<template>
    <div id="board">
        <div class="square"></div>
    </div>
</template>

<style>
#board {
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    box-sizing: border-box;
}

.square {
    border: 2px solid wheat;
    min-width: 100px;
    min-height: 100px;
    font-size: 50px;
    font-weight: bold;
    color: wheat;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>