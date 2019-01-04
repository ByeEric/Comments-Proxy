package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("dist"))
	http.Handle("/", http.StripPrefix("/", fs))

	fmt.Println("Roger Roger 3001")
	http.ListenAndServe(":3001", nil)
}
