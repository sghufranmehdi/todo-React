import { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import Box from "./components/Box/Box";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchedTodoList, setSearchTodoList] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    if (searchString.length === 0) {
      setSearchTodoList(todoList);
    } else {
      const filterTodo = todoList.filter((data) => {
        return data.item.toLowerCase().includes(searchString.toLowerCase());
      });
      console.log(filterTodo);
      setSearchTodoList(filterTodo);
    }
  }, [searchString, todoList]);

  const addTodohandler = (item) => {
    console.log(item);
    setTodoList([...todoList, { item, time: new Date().toLocaleTimeString() }]);
  };
  const removeTodo = (id) => {
    console.log(id);
    const newTodos = todoList.filter((data, key) => {
      if (key !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodoList(newTodos);
  };

  return (
    <div className="bg-black h-screen p-3">
      <div className="rounded mx-auto max-w-[750px] min-h-[700px] shadow-2xl bg-white">
        <Input
          handler={addTodohandler}
          setSearchString={setSearchString}
          searchString={searchString}
        />
        <Box searchedTodoList={searchedTodoList} removeHandler={removeTodo} />
      </div>
    </div>
  );
}

export default App;
