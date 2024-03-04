<template>
    <div class="container indicators">
        <h2 class="text">Color indicators</h2>
        <div class="indicators-container">
            <div class="square-container">
                <div class="square correct"></div>
                <p class="sq-text">Correct</p>
            </div>
            <div class="square-container">
                <div class="square partial"></div>
                <p class="sq-text">Partial</p>
            </div>
            <div class="square-container">
                <div class="square wrong"></div>
                <p class="sq-text">Wrong</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.indicators {
    min-width: fit-content;
    width: 50%;
    margin-top: 30px;
}
.text {
    margin-top: 0.5em;
    padding-bottom: 0.5em;
}
.indicators-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}
.square-container {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}
.square {
    border: 3px solid #59403A;
    width: 3em;
    aspect-ratio: 1;
}
.correct {
    background-color: #40C057;
}
.partial {
    background-color: #FAB005;
}
.wrong {
    background-color: #BF450F;
}
.sq-text {
    font-size: 1.1em;
    color: #F5E8AF;
    margin: 5px 0;
    padding-top: 5px;
}
</style>