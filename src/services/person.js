const API_URL = "https://dniruc.apisperu.com/api/v1/dni/";
const TOKEN =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFndWlycmUyODA5MTJAZ21haWwuY29tIn0.FJGMhh8X9SrR-gCwbLL_-vjX6JbuS8KAs2D2F9JgHfE";

// funcion que llama a la API y retorna datos del DNI 
const getDatos = async (dni) => {
    try {
        const call = await fetch(`${API_URL}${dni}?token=${TOKEN}`);
        const data = await call.json();
        if (!data.success) {
            throw new Error(data.message);
        }
        return data;

    } catch (e) {
        throw new Error(e.message)
    }
};
export default getDatos;