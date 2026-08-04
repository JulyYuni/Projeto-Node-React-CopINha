import { app } from "./app";

const host = '0.0.0.0';
const port = 3000;

app.listen({
    host,
    port}).then(() => {
        const url =`http://localhost:${port}`
        console.log(`HTTP running at ${url}`)
    })