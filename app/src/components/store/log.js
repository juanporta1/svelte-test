import { readable } from "svelte/store";

export const log = readable(() => {console.log("Hola Mundos")})