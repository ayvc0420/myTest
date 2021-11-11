<template>
    <div>
        <h1>this is demo1111</h1>
        <div>
            <router-link :to="{name:'Demo1111-text'}">Demo1111-text</router-link> |
            <router-link :to="{name:'Demo1111-web'}">Demo1111-web</router-link>
        </div>
        <router-view ></router-view>
    </div>
</template>
