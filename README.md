# build and run
```bash
npm install 
cd ../highlight.js/build # cd to local package build dir
npm pack # generates .tgz
cd ../vscode-markdown-cppitems # cd back to consuming project
npm install ../highlight.js/build/highlight.js-11.6.0.tgz  # install
npx webpack serve
npx webpack build 
```


# Function templates



`/*R Widget */ struct int void #pragma once`{.iuecpp} inline

## Function templatessssss  ssssss  sssss bla blu

::: fold test  
hidden?

![Alt text](https://raw.github.com/specialorange/FDXCM/master/doc/controllers_brief.svg)
![](https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e)

:::

```iuecpp
#include <algorithm> // access to std::fill, std::copy, std::swap

// Note: iterator based algorithms from stdlib also work with 'raw' pointers

// copy constructor
Vector::Vector(const Vector &other)
    : _size(other._size), _data(new Vector::value_type[_size]) {
  const auto srcBegin = other._data; 
  const auto srcEnd = other._data + other._size; 
  auto destBegin = _data; 
  std::copy(srcBegin, srcEnd, destBegin);
}

// move constructor
Vector::Vector(Vector &&other) {
  // Note: a generic way is to 'swap on move'
  // Important: have default initializers for the members
  //  to have a valid state of 'this' before swapping
  std::swap(other._data, _data);
  std::swap(other._size, _size); //
}

// destructor
Vector::~Vector() {
  delete[] _data; // release resources the object owns
  _size = 0; // doing this is ok, but then also ...
  _data = nullptr; // ... this should be done ...
  // ... but both 'resets' are not required:
  // 1. destructor is usually only called at the end of an object's lifetime 
  // 2. an object should not be used again after destruction 
  // 3. do not use a destructor explicitly for 'resetting'
  // 4. instead use a separate function to 'reset' data structure
}
```

```iuecpp
struct int void inline
#pragma once
#include <"stdio">
char* styr = "string";
char* styr = { .string = "ddd"; .item = 7};
char* styr = 'a' = 1.023443;
/*B B-block s*/
/*G B-block s*/
/*R B-block s*/
/*K B-block s*/
/*b B-block s*/
/*g B-block s*/
/*r B-block s*/
/*k B-block s*/
/* block  /*R R-block */ */
struct iue Type1, Type2, Type3, Type4;
void swap(Type1 &a, Type1 &b) { ... };
void swap(Type2 &a,Type2</*B dd */> &a  Type2 &b) { ... };
void swap(Type3 &a, Type3 &b) { ... }; 
void swap(Type4 &a, Type4 &b) { ... };
void swap(Type1 &a, Type4 &b) { ... }; /*b b-block */ // (1) /*b b-block */
// does this make sense? two different types? might make sense, depends on types
swap(objA, objB); // overload resolution /*b dd */ selects from your set of functions
```

```CMake
cmake_minimum_required(VERSION 3.0)
add_compile_definitions()
dddd
project(001 LANGUAGES CXX)  # dsdd
add_compile_options("std=c++17")
add_library(gridlib SHARED grid.cpp grid.h) add_library(gridlib SHARED grid.cpp grid.h) add_library(gridlib SHARED grid.cpp grid.h)
add_executable(${CXX} main main.cpp)
target_link_libraries(main PRIVATE gridlib)
```

# Function templates

repo: [link](https://gitlab.tuwien.ac.at/e360017/test-pages)

In C++ has *templates* which allow to implement generic functionality.
Let's assume we want to implement a non-member function `${CXX}`{.CMake} which exchanges the contents of two objects of equal type **Widget**`/*R Widget */`{.iuecpp}:
```iuecpp
struct Widget {
  int m;
  // what SMF are implicitly available?
};

void swap(Widget &a, Widget &b) { // takes two references, should swap 
  Widget tmp(std::move(a)); // save tmp. (1. move)
  a = std::move(b); // 2. move 
  b = std::move(tmp); // 3. move 
};
// requirement for widget here?
// move ctor (implicitly available?, yes)
// move assign (implicitly available? yes)
// ... copy versions of ctor and assign are also sufficient as a fallback

```
To make this swap functionality available for other types too, overloads could be used:


To make this swap functionality available for other types too, overloads could be used:
```iuecpp
struct iue Type1, Type2, Type3, Type4;
void swap(Type1 &a, Type1 &b) { ... };
void swap(Type2 &a, Type2 &b) { ... };
void swap(Type3 &a, Type3 &b) { ... }; 
void swap(Type4 &a, Type4 &b) { ... };
void swap(Type1 &a, Type4 &b) { ... }; // (1)
// does this make sense? two different types? might make sense, depends on types
swap(objA, objB); // overload resolution selects from your set of functions
```

::: fold ### >> Question blabla bla ? (click to see answers)

---

- item 1

    ```iuecpp
    struct iue Type1, Type2, Type3, Type4;
    void swap(Type1 &a, Type1 &b) { ... };
    void swap(Type2 &a, Type2 &b) { ... };
    void swap(Type3 &a, Type3 &b) { ... }; 
    void swap(Type4 &a, Type4 &b) { ... };
    void swap(Type1 &a, Type4 &b) { ... }; // (1)
    // does this make sense? two different types? might make sense, depends on types
    swap(objA, objB); // overload resolution selects from your set of functions
    ```


- item 2
- item 3
    - ddd
    - dd
---
:::

The following example will center the website on screens that are wider than 500px. On screens that are less than 500px wide, it will span the whole of the page.