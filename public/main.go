package main

import (
	"encoding/json"

	"io/ioutil"
	"log"
	"os"
	"path/filepath"
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
	rootOSFile, _ := os.Stat(path)
	//fmt.Println(rootOSFile)
	rootFile := toFile(rootOSFile, path) //start with root file
	stack := []*File{rootFile}

	for len(stack) > 0 { //until stack is empty,
		file := stack[len(stack)-1] //pop entry from stack
		stack = stack[:len(stack)-1]
		children, _ := ioutil.ReadDir(file.Path) //get the children of entry

		for _, chld := range children { //for each child
			child := toFile(chld, filepath.Join(file.Path, chld.Name())) //turn it into a File object
			file.Children = append(file.Children, child)                 //append it to the children of the current file popped
			stack = append(stack, child)                                 //append the child to the stack, so the same process can be run again
		}
	}

	output, _ := json.MarshalIndent(rootFile, "", "     ")
	//fmt.Println(string(output))

	err := ioutil.WriteFile("src/structure_file.json", output, 0644)
	if err != nil {
		log.Fatal(err)
	}

}

func toFile(file os.FileInfo, path string) *File {

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
