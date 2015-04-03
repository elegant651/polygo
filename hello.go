package main 

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"log"
	"mime"
	"net/http"
)

func hello() {
	fmt.Printf("Hello, world.\n")
}

type Message struct {
	Uid		int 	`json:"uid"`
	Username string `json:"username"`
	Text 	string	`json:"text"` 
	Lat 	string	`json:"lat"`
	Lng		string	`json:"lng"`	
}

func Messages(w http.ResponseWriter, r *http.Request) {
	messages := []Message{}

	file, err := ioutil.ReadFile("messages.json")
	if err != nil {
		log.Println("Error : ", err)
		panic(err)
	}
	fmt.Printf("file: %s\n", string(file))
	err = json.Unmarshal(file, &messages)
	if err != nil {
		log.Println("Error : ", err)
	}

	bs, err := json.Marshal(messages)
	if err != nil {
		fmt.Fprint(w, "{\"error\":\"%v\"}", err)
		return
	}
	fmt.Fprint(w, string(bs))
}


func init() {	
	mime.AddExtensionType(".svg", "image/svg+xml")

	r := mux.NewRouter()
	sr := r.PathPrefix("/api").Subrouter()
	sr.HandleFunc("/messages", Messages)
	r.HandleFunc("/{rest:.*}", handler)
	http.Handle("/", r)
}

func handler(w http.ResponseWriter, r *http.Request) {
	log.Println("path:", r.URL.Path)
	http.ServeFile(w, r, "polymodule/"+r.URL.Path)
}
