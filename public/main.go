package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type File struct {
	//ModifiedTime time.Time `json:"ModifiedTime"`
	//IsLink       bool      `json:"IsLink"`
	IsDir bool `json:"IsDir"`
	//LinksTo      string    `json:"LinksTo"`
	//Size         int64     `json:"Size"`
	Name     string  `json:"name"`
	Path     string  `json:"path"`
	Children []*File `json:"children"`
	Type     string  `json:"type"`
}

func iterateJSON(path string) {

	//fmt.Println(path)
	//c := '/'
	//path = string(c) + path

	//path = strings.TrimLeft(path, "/")

	//path = "public"
	rootOSFile, _ := os.Stat(path)
	//fmt.Println(rootOSFile)

	rootOSFile1, _ := os.Stat("public")

	rootFile := toFile(rootOSFile, path) //start with root file
	rootFile1 := toFile(rootOSFile1, "public")

	fmt.Println("root file is ", rootFile)
	fmt.Println("root file 1 is ", rootFile1)
	stack := []*File{rootFile}

	for len(stack) > 0 { //until stack is empty,
		file := stack[len(stack)-1] //pop entry from stack
		stack = stack[:len(stack)-1]

		//fmt.Println("file we are getting ", file)

		temp := file.Path
		temp = strings.TrimLeft(temp, "/")

		//fmt.Println("file path after trimming", file.Path)
		//fmt.Println("file yahan prr jo bn gyi hai vo hai ", file)

		children, _ := ioutil.ReadDir(temp) //get the children of entry

		//fmt.Println(file.Path)

		for _, chld := range children { //for each child
			child := toFile(chld, filepath.Join(temp, chld.Name())) //turn it into a File object
			//fmt.Println("each child is ", child, "file is ", file)
			file.Children = append(file.Children, child)
			//append it to the children of the current file popped

			stack = append(stack, child) //append the child to the stack, so the same process can be run again
		}
	}
	rootFile1.Children = append(rootFile1.Children, rootFile)
	output, _ := json.MarshalIndent(rootFile1, "", "     ")
	//fmt.Println(string(output))

	//fmt.Println(string(output))

	err := ioutil.WriteFile("src/structure_file.json", output, 0644)
	if err != nil {
		log.Fatal(err)
	}

}

func toFile(file os.FileInfo, path string) *File {

	fmt.Println(path)
	c := '/'
	path = string(c) + path

	directoryType := "file"

	if file.IsDir() {
		directoryType = "folder"
	}

	JSONFile := File{ //ModifiedTime: file.ModTime(),
		IsDir: file.IsDir(),
		//Size:     file.Size(),
		Name:     file.Name(),
		Path:     path,
		Children: []*File{},
		Type:     directoryType,
	}

	// if file.Mode()&os.ModeSymlink == os.ModeSymlink {
	// 	JSONFile.IsLink = true
	// 	JSONFile.LinksTo, _ = filepath.EvalSymlinks(filepath.Join(path, file.Name()))
	// } // Else case is the zero values of the fields
	return &JSONFile
}

func main() {

	iterateJSON("public/storefront-display")

}
