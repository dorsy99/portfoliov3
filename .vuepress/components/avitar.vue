<template>
    <div class="gridContainer">
        <div class="intro">
            <h1>Hi, My name is Andrew</h1>
        </div>
        <div class="avi">
            <img :src="'avitar.jpg'" />
        </div>
    </div>
</template>

<style scoped>
.gridContainer {
    display: grid;
    grid-gap: 3%;
    grid-template-columns: 25% 25% 25% 25%;
}
.avi {
    text-align: left;
    grid-column-start: 4;
    grid-column-end: 5;
}
.intro {
    grid-column-start: 1;
    grid-column-end: 4;
}
img {
    width: 70%;
    border-radius: 50%;
}
h1 {
    font-size: 3em;
}
</style>