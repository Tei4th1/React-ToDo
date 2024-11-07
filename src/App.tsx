import React, { useState } from "react";
import "./App.css";
import {
  Wrapper,
  Title,
  Button,
  StyledList,
  StyledListElement,
  Container,
  StyledArrangeButton,
  Checkbox,
  ButtonsBlock,
  Input,
} from "./components";
import { generateRandomId } from "./utils/generate-random-id";
import { ArrowIcon, CrossIcon } from "./icons";

export interface TodoBaseInterface {
  id: number;
  title: string;
  isChecked: boolean;
}

function ToDoPage() {
  const [tasks, setTasks] = useState<TodoBaseInterface[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const isInputEmpty = newTask.trim() !== "";

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNewTask(e.currentTarget.value);
  };

  const handleCheckbox = (index: number): void => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = {
        ...updatedTasks[index],
        isChecked: !updatedTasks[index].isChecked,
      };

      return updatedTasks;
    });
  };

  const addNewTask = () => {
    if (isInputEmpty) {
      setTasks([
        ...tasks,
        { id: generateRandomId(1, 100), title: newTask, isChecked: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (index: number): void => {
    const updatedTasks = tasks.filter((_, i: number) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index: number): void => {
    if (index > 0 && tasks.length !== 1 && index !== 0) {
      const updatedTasks: TodoBaseInterface[] = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index: number): void => {
    if (
      index < tasks.length &&
      tasks.length !== 1 &&
      index !== tasks.length - 1
    ) {
      const updatedTasks: TodoBaseInterface[] = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <Wrapper>
      <Title>Easy ToDo list</Title>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "380px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "380px",
          }}
        >
          <Input
            value={newTask}
            placeholder="type new task"
            onChange={onChange}
          />
          <Button disabled={!isInputEmpty} onClick={addNewTask}>
            ADD
          </Button>
        </div>
        <StyledList>
          {tasks.map((task, index) => (
            <StyledListElement key={task.id}>
              <Container key={task.id}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    isChecked={task.isChecked}
                    onClick={() => handleCheckbox(index)}
                  />
                  <span>{task.title}</span>
                </div>
                <ButtonsBlock>
                  <StyledArrangeButton onClick={() => moveTaskUp(index)}>
                    <ArrowIcon direction="up" />
                  </StyledArrangeButton>
                  <StyledArrangeButton onClick={() => moveTaskDown(index)}>
                    <ArrowIcon direction="down" />
                  </StyledArrangeButton>
                  <Button onClick={() => deleteTask(index)}>
                    <CrossIcon />
                  </Button>
                </ButtonsBlock>
              </Container>
            </StyledListElement>
          ))}
        </StyledList>
      </div>
    </Wrapper>
  );
}

export default ToDoPage;
