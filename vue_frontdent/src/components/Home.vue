<script setup>
import { onMounted } from 'vue';
import useStudent from '../composables/StudentsApi.js';

const { studentData, error, getAllStudents } = useStudent();
onMounted(getAllStudents);
// const { studentData, error, getAllStudents } = useStudent();
// onMounted(getAllStudents);
</script>

<template>
    <h1>
        Connect Vue 3 js with Laravel
    </h1>

    <div v-if="error"> Oops! Error encountered: {{ error.message }}</div>

    <div v-else-if="studentData">
        <table>
            <tr v-for="({ id, name, email }, i) in studentData">
                <td>{{ i++ }}</td>
                <td>{{ name }}</td>
                <td>{{ email }}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped></style>
