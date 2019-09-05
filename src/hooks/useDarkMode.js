import React from "react";
import useLocalStorager from "./useLocalStorage";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(initialValue) {
    const [isDark, setIsDark]= useLocalStorage("dark-mode", initialValue)
    return [isDark, setIsDark]
}