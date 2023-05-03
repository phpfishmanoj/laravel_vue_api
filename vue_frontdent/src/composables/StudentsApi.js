import axios from "axios";
import { ref } from "vue";


export default function getStudents() {
    const url = 'http://localhost:8000/api/student';
    const studentData = ref([]);
    const error = ref(null);
    const getAllStudents = async () => {
        studentData.value = [];
        error.value = null;
        try {
            const res = await axios.get(url)
            console.log(res);
            studentData.value = res.data;
        } catch (err) {
            error.value = err;
        }
    }

    return {
        studentData,
        error,
        getAllStudents
    }
}